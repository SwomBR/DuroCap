import { Schema, model } from "mongoose";
import Product from "./Product.js"; 

const cartItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, min: 0 },
  total: { type: Number, min: 0 }
}, { _id: false });

const cartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  items: [cartItemSchema],
  totalPrice: { type: Number, default: 0, min: 0 },
}, { timestamps: true });


// 🪄 Auto-calculate price and totals before saving
cartSchema.pre("save", async function (next) {
  try {
    let totalCartPrice = 0;

    for (const item of this.items) {
      // Fetch product details for each item
      const product = await Product.findById(item.product);
      if (!product) throw new Error(`Product with ID ${item.product} not found`);

      // Automatically assign price and total
      const price = product.discountedPrice || product.mrp;
      item.price = price;
      item.total = price * item.quantity;

      totalCartPrice += item.total;
    }

    // Update total price for the whole cart
    this.totalPrice = totalCartPrice;

    next();
  } catch (err) {
    next(err);
  }
});

const Cart = model("Cart", cartSchema);
export default Cart;
