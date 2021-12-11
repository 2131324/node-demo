const express = require('express')
const router = express.Router()

const path = require('path')

router.get('/',(req,res) => { 
    // res.send('<h1>Welcome to nodejs</h1>')
    // res.sendFile('C:/Users/HP/Desktop/MERN/home.html')
    res.sendFile(path.join(__dirname,'../home.html'))
})
  
router.get('/contact',(req,res) => { 
    res.send('<h1>Contact Us</h1>')
})

router.get('/about',(req,res) => { 
    res.send('<h1>About Us</h1>')
})

router.get('/json',(req,res) => { 
    res.json({name:'aman',age:21,marks:[87,65,89,34]})
})

module.exports = router