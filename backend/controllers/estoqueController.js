const estoqueModel = require("../models/estoqueModel");

const getAllProducts = async(req, res) => {
    const estoque = await estoqueModel.getAllProducts();
    return res.status(200).json(estoque);
}

const createNewProduct = async(req, res) => {
    const newProduct = await estoqueModel.createNewProduct(req.body);
    return res.status(200).json(newProduct);
}

module.exports = {
    getAllProducts,
    createNewProduct
}