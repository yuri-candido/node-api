const express = require("express")
const mongoose = require('mongoose');
const app = express()
app.use(express.json())
mongoose.connect('mongodb+srv://yuri:aH4XuCTCo4qCSrJJ@ecommerce-api.l45y8gh.mongodb.net/?retryWrites=true&w=majority')
const port = 3000

const Product = mongoose.model('Product', {
    produto: String,
    name: String,
    price: String
})
app.use(express.json())

var product = {
    name: ""
}

app.get('/', async (req, res) => {
    const pro = await Product.find()
    res.send(pro)
}) 

app.delete("/:id", async(req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    
    return res.send(product)
})

app.put("/:id", async(req, res) => {
    const productt = await Product.findByIdAndUpdate(req.params.id, {
        produto: req.body.produto,
        name: req.body.name,
        price: req.body.price
    })

    return res.send(productt)
})

app.post("/post", async (req, res) => {

    const product = new Product({
        product_id: req.body.product_id,
        name: req.body.name,
        price: req.body.price
    })

        await product.save();
        res.send(product)
    }

   //res.send(pro)
)

app.listen(port, () => {
    console.log('rodando')
})