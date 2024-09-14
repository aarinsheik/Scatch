/* 

product model :

name - string
image - image
price - number
discount - number
bgcolor - string 
panelcolor - string
textcolor - string 

*/ 

const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name : String,
    image : String,
    price : Number ,
    discount : {
        type: Number,
        default : 0,
    },
    bgcolor : String ,
    panelcolor : String,
    textcolor : String,
});

module.exports = mongoose.Schema("product", productSchema);