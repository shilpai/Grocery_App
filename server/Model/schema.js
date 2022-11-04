const mongoose = require('mongoose')
const schema = mongoose.Schema({
    item:{
        required:true,
        type:String
    },
    isPurchased:{
        required:true,
        type:Boolean
    }
})


module.exports = mongoose.model('list',schema)