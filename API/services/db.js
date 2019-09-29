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

const Campaign = sequelize.define('campaigns', {
    name: {
        type: Sequelize.STRING,
        field: 'name'
    }
});

module.exports = { Campaign };