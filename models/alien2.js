const mongoose = require('mongoose')


const alienSchema2 = new mongoose.Schema({

    empid:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Alien2', alienSchema2)
