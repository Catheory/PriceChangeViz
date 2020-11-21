const Sequelize = require('sequelize')
const db = require('./database')

const Vehicle = db.define('vehicle', {
    year: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    price: {
        type: Sequelize.DECIMAL(10, 2), 
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
})

module.exports = Vehicle