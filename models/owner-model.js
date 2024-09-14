/*

Owner Model :

fullname - string
email - string
password - string
products - array
profile_pic - image
contact - number
gstin - string

*/

const mongoose = require('mongoose')

const ownerSchema = mongoose.Schema({
    fullname : {
        type: String,
        trim:true,
        minLength: 3,

    },
    email : String,
    password : String,
    contact : Number,
    profile_pic : String,
    gstin : String,
    products : {
        type: Array,
        default:[],
    },
});

module.exports = mongoose.Schema("owner", ownerSchema);