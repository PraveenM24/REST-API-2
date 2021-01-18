const express = require('express') //Include Express Framework
const mongoose = require('mongoose') //Include Mongoose
const url = 'mongodb+srv://tpgit:tpgit@tpgit.ubcql.mongodb.net/SigmaTech?retryWrites=true&w=majority' //Database URL
const PORT = process.env.PORT || 7000;

const app = express() //Start Express Framework

mongoose.connect(url, {useNewUrlParser:true}) //Connect Database [useNewUrlParser:avoid warnings]
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
const con = mongoose.connection //Connection Holder

con.on('open', () =>{        //When Database connection is made   
    console.log('Connected...')
})

app.use(express.json())

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

const alienRouter = require('./routes/aliens')
app.use('/employees', alienRouter)

app.listen(PORT, () =>{
    console.log('Server Started')
})
