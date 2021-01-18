const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({

    empname:{
        type: String,
        required: true
    },
    empid:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    team:{
        type: String,
        required: true
    },
    tech:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    experience:{
        type: Number,
        required: true
    },
    salary:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Alien', alienSchema)
