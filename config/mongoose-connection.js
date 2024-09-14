const mongoose = require('mongoose')

mongoose.connect( "mongodb://localhost:27017/scatch" )
.then( function(){
    console.log('mongoose is connected successfully.');
})
.catch(function(err){
    console.log('mongoose is connection failed ! Error :\n',err);
});

module.exports = mongoose.connection;