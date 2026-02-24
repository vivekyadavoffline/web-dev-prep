const express = require('express')
const app = express()
const port = 5000

app.use(express.static("."))

app.get('/', (req, res) => {
  console.log("hey its a get request")
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})