const express = require("express")

const app = require("liquid-express-views")(express())
app.use(express.urlencoded({ extended: false }))

const productRouter = require("./routes/Products")
app.use("/products", productRouter)

app.listen(3000, () => {
    console.log(' Server listening on port 3000')
})
//Week 1
// index =http://localhost:3000/products 

// show  = http://localhost:3000/products/1

//Update = curl -X POST --data "id=2&slug=nike-test&name=Nike Test" http://localhost:3000/products

//create = curl -X POST --data "id=1&slug=nike-shoe&name=Nike shoe Updated" http://localhost:3000/products/1

//delete = curl -X DELETE http://localhost:3000/products/1
