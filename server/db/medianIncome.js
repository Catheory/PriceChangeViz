const Sequelize = require('sequelize')
const db = require('./database')

const Income = db.define('incomes', {
    year: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    income: {
        type: Sequelize.DECIMAL(10, 2), 
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    inflation_adjusted_income: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
})

module.exports = Income