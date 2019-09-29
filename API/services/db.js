const Sequelize = require('sequelize');

const DB = new Sequelize(process.env.DATABASE_URL);

var Campaign = DB.define('campaigns', {
    name: {
        type: Sequelize.STRING,
        field: 'name'
    }
})