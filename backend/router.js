const express = require("express");
const router = express.Router();
const Product = require('./models/connection')
module.exports = router;

router.post("/", async (req, res) => {
    const product = new Product({
        cod: req.body.cod,
        name: req.body.name,
        quantity: req.body.quantity,
    });
    await product.save();
    return res.send(product);
})