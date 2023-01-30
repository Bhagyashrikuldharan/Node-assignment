const express = require('express');
const router = express.Router();
router.post('/', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
        res.send('Login Successfull');
    } 
    else {
        res.send('Incorrect username or password.');
    }});
 module.exports = router;
















 // let username = document.getElementById("username").value;
// let password = document.getElementById("password").value;


// document.getElementById("submit").addEventListener("click", function() {

//     if(username === "admin" && password === "admin"){
//         alert("Login Successful")
//     }
//     else{
//         alert("Please enter correct username & password")
//     }
//   });










