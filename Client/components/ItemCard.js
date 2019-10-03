import React from 'react';
import fetch from 'isomorphic-unfetch';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { InputLabel } from '@material-ui/core';

const API_URL = 'http://localhost:3001';

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    background: 'linear-gradient(135deg, #1E6a8B 30%, #FF8E53 90%)'
  },
  pos: {
    marginBottom: 12,
  }
});

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.classes = useStyles;
    this.state = {
        item: {},
        itemId: this.props.item.id
    }

    this.formVal = this.state.item;
    this.deleteItem = this.deleteItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.updateNameValue = this.updateNameValue.bind(this);
    this.updateQuantityValue = this.updateQuantityValue.bind(this);
    this.updateNoteValue = this.updateNoteValue.bind(this);
  }

  componentDidMount() {
    var self = this;
    self.setState({ item: self.props.item });
    this.formVal = this.state.item;
  }

  componentWillUnmount() {

  }

  updateNameValue(e) {
    let item = this.state.item;
    item.name = e.target.value;
    this.setState({ item });
  }

  updateQuantityValue(e) {
    let item = this.state.item;
    item.quantity = e.target.value;
    this.setState({ item });
  }

  updateNoteValue(e) {
    let item = this.state.item;
    item.note = e.target.value;
    this.setState({ item });
  }

  saveItem() {
    this.props.updateItem(this.state.item, this.state.itemId);
  }

  deleteItem(){
    this.props.onDelete(this.state.itemId);
  }

  render (){
    return (
      <Card className={this.classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            <TextField
              id="standard-name"
              value={this.props.item.name}
              onChange={this.updateNameValue}
              onBlur={this.saveItem}
              margin="normal"
              label="Name"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Typography>
          <Typography className={this.classes.pos} color="textSecondary">
            <TextField
                id="standard-quantity"
                label="Amount"
                InputLabelProps={{
                  shrink: true,
                }}
                value={this.props.item.quantity}
                onChange={this.updateQuantityValue}
                onBlur={this.saveItem}
                margin="normal"
              />
          </Typography>
          <Typography variant="body2" component="p">
          <TextField
                id="standard-notes"
                label="Notes"
                InputLabelProps={{
                  shrink: true,
                }}
                value={this.props.item.note}
                onChange={this.updateNoteValue}
                onBlur={this.saveItem}
                margin="normal"
              />
          </Typography>
        </CardContent>
        <CardActions>
              <Button size="small" onClick={this.deleteItem}>Remove</Button>
        </CardActions>
      </Card>
    );
  }
}

export default ItemCard;