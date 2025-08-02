const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const productController = require('../controllers/productController');

router.post('/add', upload.single('image'), productController.addProduct);
router.get('/', productController.getAllProducts);
router.get('/low-stock', productController.getLowStockProducts);

module.exports = router;
