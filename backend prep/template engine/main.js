const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    let siteName = "adidas"
    let searchText = "Search now"
    let arr = [1, 2, 43, 4, 5, 6]  
    
    res.render("index", { siteName:siteName , searchText : searchText , arr})
})


app.get('/blog/:slug', (req, res) => {
    let blogTitle = "adidas why and when"
    let blogContent = "Search now yadav brand"

    res.render("blogpost", {blogTitle:blogTitle ,blogContent: blogContent })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
