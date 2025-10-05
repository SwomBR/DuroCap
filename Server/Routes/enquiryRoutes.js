import express from "express";
import Enquiry from "../Models/enquiry.js";
import authenticate from "../Middleware/auth.js";
import adminCheck from "../Middleware/adminCheck.js";
import userCheck from "../Middleware/userCheck.js";

const router = express.Router();

/**
 * @route   POST /enquiry
 * @desc    Create a new enquiry (accessible to all users)
 * @access  Public
 */
router.post("/enquiry", authenticate, userCheck, async (req, res) => {
  try {
    const { productService, name, email, country, phone, message } = req.body;

    if (!productService || !name || !email || !country || !phone || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newEnquiry = new Enquiry({
      productService,
      name,
      email,
      country,
      phone,
      message
    });

    await newEnquiry.save();
    res.status(201).json({ message: "Enquiry submitted successfully.", enquiry: newEnquiry });
  } catch (error) {
    res.status(500).json({ message: "Error submitting enquiry.", error: error.message });
  }
});

/**
 * @route   GET /admin/enquiries
 * @desc    Get all enquiries (admin only)
 * @access  Admin
 */
router.get("/admin/enquiries", authenticate, adminCheck, async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching enquiries.", error: error.message });
  }
});

/**
 * @route   GET /admin/enquiries/:id
 * @desc    Get a single enquiry by ID (admin only)
 * @access  Admin
 */
router.get("/admin/enquiries/:id", authenticate, adminCheck, async (req, res) => {
  try {
    const { id } = req.params;
    const enquiry = await Enquiry.findById(id);

    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found." });
    }

    res.status(200).json(enquiry);
  } catch (error) {
    res.status(500).json({ message: "Error fetching enquiry.", error: error.message });
  }
});

export default router;
