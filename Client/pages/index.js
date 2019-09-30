import fetch from 'isomorphic-unfetch';

import ItemCard from '../components/ItemCard';
import { Button } from '@material-ui/core';

const API_URL = 'http://localhost:3001';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        
        
    }

    componentDidMount() {
        var self = this;
        self.getAllItems().then(items => {
            self.setState({ items })
        });
    }

    handleDelete(itemId) {
        const self = this;
        fetch(API_URL + '/item/' + itemId,{
            method: 'delete',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              }
        })
        .then((id) => {
            const filteredItems = self.state.items.filter(i => i.id != itemId);
            self.setState({ items: filteredItems });
            self.forceUpdate();
        });
    }

    addItem(){
        const self = this;
        fetch(API_URL + '/item',{
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              }
        }).then(item => {
            let appendedItems = self.state.items;
            appendedItems.push(item);
            self.setState({ items: appendedItems });
            self.forceUpdate();
        });
    }

    updateItem(item, itemId){
        const self = this;
        fetch(API_URL + '/item/' + itemId, {
            method: 'put',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({item})
        }).then(() => {
            let updatedItems = self.state.items.map(i => {
                if(i.id == itemId) {
                    return item;
                } else {
                    return i;
                }
            });
            self.setState({ items: updatedItems });
            self.forceUpdate();
        });
    }

    render(){
        return(
            <div>
                {this.state.items.map((item, i) => <ItemCard 
                                                        key={i} 
                                                        item={item} 
                                                        onDelete={this.handleDelete.bind(this)}
                                                        updateItem={this.updateItem.bind(this)}
                                                        />)}
                <Button size="large" onClick={this.addItem.bind(this)}>Add Item...</Button>
            </div>
        );
    }

    getAllItems = async () => {
        const res = await fetch(API_URL + '/item');
        const data = await res.json();
    
        return data;
    }
};

export default Index;