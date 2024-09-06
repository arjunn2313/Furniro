const { createProduct, getAllProducts, fetchSingleProduct, updateProduct } = require("../controllers/product.controller");
const { upload } = require("../utils/multerMiddleware");
const router = require("express").Router();

// CREATE
router.post("/create", upload.array('product', 5),createProduct)
// GET
router.get("/get",getAllProducts)
// GET / SINGLE
router.get("/single/:productId",fetchSingleProduct)
// Update a product by ID
router.put("/update/:productId", updateProduct);
// DELETE


module.exports = router;