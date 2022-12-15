const express = require("express");//cos we need express router
const router = express.Router();
const {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct
} = require("../controller/productControllers");

//Get all products from db

router.route('/').get(getProducts).post(createProduct)
router
  .route('/:id')
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProduct)


module.exports = router;