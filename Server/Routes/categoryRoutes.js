import express from "express";
import Category from "../Models/category.js";
import authenticate from "../Middleware/auth.js";
import adminCheck from "../Middleware/adminCheck.js";

const router = express.Router();

/**
 * @route   POST /admin/categories
 * @desc    Create a new category
 * @access  Admin only
 */
router.post("/admin/categories", authenticate, adminCheck, async (req, res) => {
  try {
    const { name, description, image } = req.body;

    // Prevent duplicate categories
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: "Category with this name already exists." });
    }

    const newCategory = new Category({ name, description, image });
    await newCategory.save();

    res.status(201).json({ message: "Category created successfully.", category: newCategory });
  } catch (error) {
    res.status(500).json({ message: "Error creating category.", error: error.message });
  }
});

/**
 * @route   GET /categories
 * @desc    Get all categories
 * @access  Public
 */
router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories.", error: error.message });
  }
});

/**
 * @route   PUT /admin/categories/:id
 * @desc    Update category by ID
 * @access  Admin only
 */
router.put("/admin/categories/:id", authenticate, adminCheck, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, image } = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name, description, image },
      { new: true, runValidators: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found." });
    }

    res.status(200).json({ message: "Category updated successfully.", category: updatedCategory });
  } catch (error) {
    res.status(500).json({ message: "Error updating category.", error: error.message });
  }
});

/**
 * @route   DELETE /admin/categories/:id
 * @desc    Delete category by ID
 * @access  Admin only
 */
router.delete("/admin/categories/:id", authenticate, adminCheck, async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found." });
    }

    res.status(200).json({ message: "Category deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category.", error: error.message });
  }
});

export default router;
