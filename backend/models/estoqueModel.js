const Products = require("./connection");

const getAllProducts = async () => {
    const [products] = await Products.find()
    return products;
}


module.exports = {
    getAllProducts
}