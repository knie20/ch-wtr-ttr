import React from 'react';
import fetch from 'isomorphic-unfetch';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

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
        item: {}
    }  
  }

  componentDidMount() {
    var self = this;
    console.log(self.props);
    self.setState({ item: self.props.item });
  }

  componentWillUnmount() {

  }
  render (){
    console.log(this.classes)
    return (
      <Card className={this.classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            <TextField
              id="standard-name"
              value={this.state.item.name}
              onBlur={this.props.saveItem}
              margin="normal"
            />
          </Typography>
          <Typography className={this.classes.pos} color="textSecondary">
            <TextField
                id="standard-quantity"
                label="Amount"
                value={this.state.item.quantity}
                onBlur={this.props.saveItem}
                margin="normal"
              />
          </Typography>
          <Typography variant="body2" component="p">
          <TextField
                id="standard-notes"
                label="Notes"
                value={this.state.item.note}
                onBlur={this.props.saveItem}
                margin="normal"
              />
          </Typography>
        </CardContent>
        <CardActions>
              <Button size="small" onClick={this.props.onDelete}>Remove</Button>
        </CardActions>
      </Card>
    );
  }
}

export default ItemCard;