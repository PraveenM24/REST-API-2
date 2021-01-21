const express = require('express')
const router = express.Router()
const Alien = require('../models/alien2')

router.get('/', async(req, res) => {
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const alien = new Alien({
        empid: req.body.empid,
        password: req.body.password,
        email: req.body.email
    })

    try{
        const a1 = await alien.save()
        res.json(a1) 
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id', async(req,res) =>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub 
        const a1 = await alien.remove()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

module.exports = router
