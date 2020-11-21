const express = require('express')
const path = require('path')

const app = express()


app.use(express.static(path.join(__dirname, '../public')))

app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app

