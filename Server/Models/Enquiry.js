import { Schema, model } from "mongoose";

const enquirySchema = new Schema({
  enquiryType: { 
    type: String, 
    required: true, 
    trim: true,
    enum: ["Product Related", "Service Related", "Estimation"] 
  },
  name: { type: String, required: true, trim: true, minlength: 2 },
  email: { 
    type: String, 
    required: true, 
    trim: true, 
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"] 
  },
  country: { type: String, required: true, trim: true },
  phone: { 
    type: String, 
    required: true, 
    trim: true, 
    match: [/^[0-9]{7,15}$/, "Invalid phone number"] 
  },
  message: { type: String, required: true, trim: true, minlength: 50 },
  viewed: { type: Boolean, default: false },
}, { timestamps: true });

export default model("Enquiry", enquirySchema);
