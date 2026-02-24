import fs from "fs/promises"
let a = await  fs.readFile("vivek.text")
let b = await  fs.appendFile("vivek.text" ,"\n\n he is nice")
console.log(a.toString())