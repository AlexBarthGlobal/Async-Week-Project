const Sequelize = require('sequelize');
const db = require('./database')

module.exports = db.define('campuses', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.TEXT,
        defaultValue: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg'
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT
    }
})