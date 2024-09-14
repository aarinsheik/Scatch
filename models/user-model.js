/*

User Model :

fullname - string
email - string
password - string
cart - array
isAdmin - boolean
profile_img - image
contact - number
orders - array 

*/

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname : {
        type: String,
        trim:true,
        minLength: 3,

    },
    email : String,
    password : String,
    contact : Number,
    profile_pic : String,
    isAdmin : Boolean,
    orders : {
        type: Array,
        default:[],
    },
    cart:{
        type: Array,
        default: [],
    }
});

module.exports = mongoose.Schema("user", userSchema);