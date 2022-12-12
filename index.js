const express = require("express")

const app = require("liquid-express-views")(express())
app.use(express.urlencoded({ extended: false }))

const productRouter = require("./routes/Products")
const variantRouter = require("./routes/Variants")
const imageRouter = require("./routes/Images")
app.use("/products", productRouter)
app.use("/variants", variantRouter)
app.use("/images", imageRouter)

app.listen(3000, () => {
    console.log(' Server running on port 3000')
})
//Week 1
// index =http://localhost:3000/products 

// show  = http://localhost:3000/products/1

//Update = curl -X POST --data "id=2&slug=nike-test&name=Nike Test" http://localhost:3000/products

//create = curl -X POST --data "id=1&slug=nike-shoe&name=Nike shoe Updated" http://localhost:3000/products/1

//delete = curl -X DELETE http://localhost:3000/products/1
