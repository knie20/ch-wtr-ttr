const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    define: {
        freezeTableName: true
    },
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
});

sequelize.authenticate().then(() => {
    console.log('Connection to Database Success');
});

const Item = sequelize.define('items', {
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    quantity: {
        type: Sequelize.INTEGER,
        field: 'quantity'
    },
    note: {
        type: Sequelize.STRING,
        field: 'note'
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
    type: Sequelize.DATE,
    field: 'updated_at',
    defaultValue: sequelize.literal('NOW()')
    }
});

module.exports = { Item };