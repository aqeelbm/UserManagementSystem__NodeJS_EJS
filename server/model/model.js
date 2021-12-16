const { text } = require('body-parser')
const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    gender: String,
    status: String
})

const Userdb = mongoose.model('userdbs', schema)

module.exports = Userdb