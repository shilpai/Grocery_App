// const { Router } = require('express')
const express = require('express')
const router = express.Router()
const Schema = require('../Model/schema')

let arr = []

router.get('/',async(req,res)=>{
    const result = await Schema.find()
    res.send(result)
})

router.post('/add',async(req,res)=>{
    const result = await Schema.create(req.body)
    res.send({message:'data added successfully',data:result})
})

router.put('/:id',async(req,res)=>{
    const _id =  req.params.id
    const result = await Schema.updateOne({_id},{isPurchased: true})
        
    res.send({message:'data updated',data:result})
})
router.delete('/:id',async(req,res)=>{
    const _myid =  req.params.id
    const result = await Schema.deleteOne({_myid})
    res.send({message:'item deleted',data:result})
})

module.exports = router

