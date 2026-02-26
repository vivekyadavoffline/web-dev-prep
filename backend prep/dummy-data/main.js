const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
const Employee = require("./model/employee");

mongoose.connect('mongodb://127.0.0.1:27017/company');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' })
})
app.get('/generate', async (req, res) => {
    for (let index = 0; index < 10; index++) {
    await Employee.create({
    name: "Vivek",
    salary: 50000,
    language: "JavaScript",
    city: "Delhi",
    isManager: false
})
    }
    res.render('index', { foo: 'FOO' })
})

app.listen(port, () => {
    console.log(` example app listening on port ${port}`)
})