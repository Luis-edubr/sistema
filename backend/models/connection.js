const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://devluis:root@produtos.ivkllyk.mongodb.net/?retryWrites=true&w=majority&appName=Produtos')
const Product = mongoose.model('Product', {
    cod: {
        type: Number,
        unique: true
    },
    name: String,
    quantity: Number,
});

module.exports = Product;