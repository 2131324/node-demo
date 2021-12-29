const express = require('express')
const app = express()
const mongoose = require('mongoose')

const routes = require('./routes/routes')

app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs')
app.set('views','views')

app.use('/',routes)

app.get('*',(req,res) => { 
  res.send('<h1>Page Not Found</h1>')
})

mongoose
        .connect('mongodb://localhost:27017/demodb')
        .then(() => {
          app.listen(8500,() => {
            console.log('Database Connected');
            console.log('Server Connected at 8500');
          })
        })
        .catch((err) => {
          console.log("Some Error");
          console.log(err);
        })





