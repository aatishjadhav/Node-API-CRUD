const express = require("express");
const {
  getProducts,
  getProduct,
  createProduct,
  updateproduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

//Get all products
router.get("/", getProducts);

//Get single product
router.get("/:id", getProduct);

//Create a  product
router.post("/", createProduct);

//Update a product
router.put("/:id", updateproduct);

//Delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
