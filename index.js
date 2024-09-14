const express = require("express");
const path = require("path");
const cookieParser = require('cookie-parser');

const db = require("./config/mongoose-connection")

const ownersRouter = require('./routes/ownersRouter')
const usersRouter = require('./routes/usersRouter')
const productsRouter = require('./routes/productsRouter')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname , "public")));
app.set("view engine", "ejs");

app.get('/' , (req,res)=>{
    res.send('hello scatch !');
} );

//creating routes :
app.use('/owners', ownersRouter );
app.use('/users', usersRouter );
app.use('/products', productsRouter );

app.listen(3000 , ()=>{
    console.log('Scatch backend running on Port-3000 , http://localhost:3000/');
})