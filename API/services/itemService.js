const Models = require('./db');

module.exports = {
    getAllItems: () => {
        return Models.Item.findAll().then(items => {
            return items;
        });
    },

    addItem: (item) => {
        return Models.Item.create(item);
    },

    updateItem: (item, id) => {
        delete item.id;
        return Models.Item.update(item, {where: {id}});
    },

    deleteItem: (id) => {
        return Models.Item.destroy({ where: {id} });
    }
}
