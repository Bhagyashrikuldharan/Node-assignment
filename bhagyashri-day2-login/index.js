const express = require("express");
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.get('/' , (req, res) => {  
    res.render("index");
})

app.listen(3000, () =>{
    console.log("server started at port 3000");
})



const loginRouter = require('./public/js/script');
app.use('/index', loginRouter);
;

