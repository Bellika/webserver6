const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log('Listening'))

app.get('/', (req, res) => 
  res.json({ message: 'Docker!' }))

