const express = require('express')
const app = express()

app.get('/',(req,res) => {
  res.send('<h1>Welcome to nodejs</h1>')
})

app.listen(8500,() => {
  console.log('Server Connected');
})
