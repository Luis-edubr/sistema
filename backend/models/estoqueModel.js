const Product = require("./connection");

const getAllProducts = async () => {
    const products = await Product.find()
    return products;
}

const createNewProduct = async (params) => {
    const product = new Product({
        cod: params.cod,
        name: params.name,
        quantity: params.quantity
    });
    await product.save();
    return product;
} 

module.exports = {
    getAllProducts,
    createNewProduct
}