const mongoose = require('mongoose')

const ProductSchema = new  mongoose.Schema({
    imageUrl:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    count: {
        type: String,
        required: true,
    },
    sizeWidth:{
        type: String,
        required: true, 
    },
    sizeHeight:{
        type: String,
        required: true, 
    },
    weight:{
        type: String,
        required: true,
    },
    comments:{
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('Product', ProductSchema)
