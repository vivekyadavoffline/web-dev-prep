import mongoose from "mongoose"
import express from "express"
import Todo from "./models/todo.js";
let a = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const newTodo = new Todo({
    title: "im first",
    desc: "im second desc",
    isDone: false ,
    days : 4
  });


  res.send("Todo saved");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
