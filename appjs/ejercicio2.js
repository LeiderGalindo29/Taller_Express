const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/clientes', (req, res) => {
    res.send('clientes')
  })

app.listen(port, () => {
  console.log(`Estas en el puerto : ${port}`)
})
