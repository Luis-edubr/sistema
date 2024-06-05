const estoqueModel = require("../models/estoqueModel");

const getAllProducts = async(req, res) => {
    const estoque = await estoqueModel.getAllProducts();
    return res.status(200).json(estoque);
}