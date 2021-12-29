exports.checklogin = (req,res) => {
    
    console.log(req.body);

    if(req.body.email == 'email@gmail.com' && req.body.password == '12345')
    {
        res.send('<h1>Welcome</h1>')
    }
    else {
        res.send('<h1>Invalid Details</h1>')
    }
    
}
exports.login = (req,res) => {
    res.render('login')
}

exports.fruits = (req,res) => { 
    res.render('fruit',{fruitnames :['apple','mango','orange','banana']})
 }
 exports.list =(req,res) => { 
    res.render('list',{names:["Ram","Amit","Nitin","Dhruv"]})
}