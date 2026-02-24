const express = require('express')
const app = express()
const port = 5000

app.use(express.static(__dirname))

// app.get('/', (req, res) => {
//   console.log("hey its a get request")
//   res.send('Hello World!')
// })

app.get('/index', (req, res) => {
  console.log("hey its about html ")
  res.sendFile('mypage.html', {root: __dirname})
})

// app.put('/', (req, res) => {
//   console.log("hey its a get request")
//   res.send('Hello World! ji')
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
