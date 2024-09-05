const express = require("express");
const router = express.Router();
const estoqueController = require("./controllers/estoqueController");
module.exports = router;

router.get("/getProducts", estoqueController.getAllProducts);
router.post("/newProduct", estoqueController.createNewProduct); 
 