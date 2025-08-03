import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  quantity: { type: Number, default: 0 },
  price: { type: Number, required: true },
  image: String,
  offerLabel: String,
  discountPrice: Number,
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;
