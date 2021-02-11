const Sequelize = require('sequelize');
const db = require('./database')

module.exports = db.define('campuses', {
    campusName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    address: {
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
    description: {
        type: Sequelize.TEXT
    }
})