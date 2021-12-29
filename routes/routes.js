const express = require('express')
const router = express.Router()
const path = require('path')

const controller = require('../controllers/controller')
const User = require('../models/user')

router.get('/',(req,res) => { 
    // res.send('<h1>Welcome to nodejs</h1>')
    // res.sendFile('C:/Users/HP/Desktop/MERN/home.html')
    // res.sendFile(path.join(__dirname,'../home.html'))    
    res.render('home',{isLoggedIn:true,name:'Nitin',age:23,marks:[21,34,54,43],mobile:'987654321',salary:32000})
})
  
router.get('/contact',(req,res) => { 
    res.send('<h1>Contact Us</h1>')
})

router.get('/list',controller.list)
router.get('/fruit',controller.fruits)

router.get('/about',(req,res) => { s
    res.send('<h1>About Us</h1>')
    //res.sendFile(path.join(__dirname,'../text.html'))
})

router.get('/Nitin',(req,res) => { 
     res.send('<h1>Nitin</h1>')
   // res.sendFile(path.join(__dirname,'../form.html'))
    //res.sendFile(path.join(__dirname,'../text.html'))
})

router.get('/json',(req,res) => { 
    res.json({name:'aman',age:21,marks:[87,65,89,34]})   
})   

//router.post('/savedata',(req,res) => {

router.post('/savetodata',(req,res) => { 
    
    console.log(req.body);

    res.send('Thank you to all')
})

router.get('/login',controller.login)

router.post('/checklogin',controller.checklogin)

//////////////////////////////////////////////////////////////////////////////


router.get('/signup',(req,res) => {
    res.render('signup') 
})

router.post('/saveuser',async (req,res) => {
    console.log(req.body);
    var data = {
        email:req.body.email,
        password:req.body.password,
        mobile:req.body.Mobile,
        fname:req.body.fname,
        mname:req.body.mname,
        fav_hobbies:req.body.fav_hobbies,
        vehicle:req.body.vehicle
        
    }  
    const result = await User(data).save()
    console.log(result);

})



router.get('/getdata',async (req,res) => {
    const result = await User.find({})
     console.log(result);

    res.render('viewdata',{result})
})



router.get('/update/:id',async (req,res) => {
    const id = '61c3f5e2f613026237b9e880';
    await User.findByIdAndUpdate(id,{email:'new@gmail.com',fname:'ab'})  
})

router.get('/delete/:id',async (req,res) => {
    const id = '61c557e0b7ecba19802e799d';
    await User.findByIdAndDelete(res.params.id)

   res.redirect('/getdata')
})

router.get('/edit/:id', async (req,res) => {
    const id = req.params.id
    const result = await User.findById(id)
    console.log(result);
    res.render('editpage',{result})
})

router.post('/edituser/:id', async (req,res) => {
    const id = req.params.id

    let data = {
        email:req.body.email,
        password:req.body.password,
        mobile:req.body.mobile
    }


    const result = await User.findByIdAndUpdate(id,data)
    // console.log(result);
    res.redirect('/getdata')
})

module.exports = router 

