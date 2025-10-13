import { Router } from "express";
import Cart from "../Models/Cart.js";
import Product from "../Models/Product.js";
import authenticate from "../Middleware/auth.js";
import userCheck from "../Middleware/userCheck.js";

const cartRoutes = Router();

/**
 * 🛒 Add a product to the cart
 * Automatically fetches product price from Product model (via pre-save hook)
 */
cartRoutes.post("/addToCart", authenticate, userCheck, async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({ message: "Product ID and quantity are required." });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      // Create a new cart
      cart = new Cart({
        user: userId,
        items: [{ product: productId, quantity }],
      });
    } else {
      // Update existing cart
      const existingItem = cart.items.find(
        (item) => item.product.toString() === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }
    }

    // 🪄 The pre('save') hook will calculate prices automatically
    await cart.save();

    res.status(200).json({ message: "Product added to cart successfully.", cart });
  } catch (error) {
    res.status(500).json({ message: "Error adding product to cart.", error: error.message });
  }
});

/**
 * 👁 View user's cart
 */
cartRoutes.get("/viewCart", authenticate, userCheck, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");
    if (!cart) return res.status(404).json({ message: "Cart not found." });

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart.", error: error.message });
  }
});

/**
 * ✏️ Update product quantity in cart
 */
cartRoutes.put("/updateCart/:productId", authenticate, userCheck, async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;

    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ message: "Cart not found." });

    const item = cart.items.find((i) => i.product.toString() === productId);
    if (!item) return res.status(404).json({ message: "Product not in cart." });

    if (quantity <= 0) {
      cart.items = cart.items.filter((i) => i.product.toString() !== productId);
    } else {
      item.quantity = quantity;
    }

    // 🪄 pre('save') hook recalculates total and price
    await cart.save();

    res.status(200).json({ message: "Cart updated successfully.", cart });
  } catch (error) {
    res.status(500).json({ message: "Error updating cart.", error: error.message });
  }
});

/**
 * ❌ Remove product from cart
 */
cartRoutes.delete("/deleteCart/:productId", authenticate, userCheck, async (req, res) => {
  try {
    const { productId } = req.params;

    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ message: "Cart not found." });

    const itemIndex = cart.items.findIndex((i) => i.product.toString() === productId);
    if (itemIndex === -1)
      return res.status(404).json({ message: "Product not in cart." });

    cart.items.splice(itemIndex, 1);

    await cart.save(); // pre('save') will handle recalculations

    res.status(200).json({ message: "Product removed from cart successfully.", cart });
  } catch (error) {
    res.status(500).json({ message: "Error removing product from cart.", error: error.message });
  }
});

/**
 * 💳 Mock Payment Endpoint
 */
cartRoutes.post("/cart/payment", authenticate, userCheck, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty. Add products to proceed." });
    }

    // Mock payment details (integration can be added later)
    const paymentInfo = {
      amount: cart.totalPrice,
      currency: "INR",
      paymentStatus: "success",
      transactionId: "TXN" + Date.now(),
    };

    res.status(200).json({
      message: "Payment successful (mock).",
      payment: paymentInfo,
    });
  } catch (error) {
    res.status(500).json({ message: "Payment failed.", error: error.message });
  }
});

/**
 * 🧾 Checkout Cart
 */
cartRoutes.post("/cart/checkout", authenticate, userCheck, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty. Cannot checkout." });
    }

    // Optional: Create an order here before clearing cart

    // Clear cart
    cart.items = [];
    cart.totalPrice = 0;
    await cart.save();

    res.status(200).json({
      message: "Checkout successful. Your order has been placed.",
    });
  } catch (error) {
    res.status(500).json({ message: "Checkout failed.", error: error.message });
  }
});

export default cartRoutes;
