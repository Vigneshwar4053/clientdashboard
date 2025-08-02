const Product = require('../models/Product');

// Add product
exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const imageUrl = req.file ? req.file.filename : null;

    const product = new Product({ name, description, price, stock, imageUrl });
    await product.save();
    res.status(201).json({ message: 'Product added', product });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add product' });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// Get low stock products
exports.getLowStockProducts = async (req, res) => {
  try {
    const lowStock = await Product.find({ stock: { $lt: 5 } });
    res.json(lowStock);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch low stock' });
  }
};
