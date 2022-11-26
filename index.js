const express = require("express")

const app = express()
app.use(express.urlencoded({ extended: false }))

const productRouter = require("./routes/Products")
app.use("/products", productRouter)

app.listen(3000, () => {
    console.log('Server running on port 3000')
})