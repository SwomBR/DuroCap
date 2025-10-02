import { Schema, model } from "mongoose";

const addressSchema = new Schema({
  address: { type: String, required: true, trim: true },
  district: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  country: { type: String, required: true, trim: true },
  pinCode: { type: Number, required: true, min: 100000, max: 999999 }
}, { _id: false }); // 👈 prevents extra _id for each address

const userSchema = new Schema({
  name: { type: String, required: true, trim: true, minlength: 2 },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true, 
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"] 
  },
  phone: {  
    type: String,  
    required: true,  
    trim: true,  
    match: [/^[0-9]{7,15}$/, "Invalid phone number"] 
  },
  password:{ type:String, required: true },
  userRole:{ type:String, enum:["admin", "user"], default: "user" },
  addresses: [addressSchema],
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

const User = model("User", userSchema);

export default User;

