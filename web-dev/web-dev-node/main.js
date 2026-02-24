const fs = require("fs")
// fs.writeFileSync("vivek.text" , "vivek is a good boy")

fs.writeFile("vivek2.text" , "vivek is a good boy" , () => {
    console.log("ho gya ji")
    fs.readFile("vivek2.text" , (error,data)=> {
        console.log(error , data.toString())
    })
})
console.log("end")