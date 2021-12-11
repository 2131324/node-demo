const express = require('express')
const app = express()

const routes = require('./routes/routes')

app.use('/',routes)

app.get('*',(req,res) => { 
  res.send('<h1>Page Not Found</h1>')
})

app.listen(8500,() => {
  console.log('Server Connected');
})
