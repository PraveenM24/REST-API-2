const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async(req, res) => {
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const alien = new Alien({
        empname: req.body.empname,
        empid: req.body.empid,
        email: req.body.email,
        tech: req.body.tech,
        team: req.body.team,
        age: req.body.age,
        experience: req.body.experience,
        salary: req.body.salary
    })

    try{
        const a1 = await alien.save()
        res.json(a1) 
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id', async(req,res) =>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub 
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
