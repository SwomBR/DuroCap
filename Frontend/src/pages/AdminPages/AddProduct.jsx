import React, { useState, useEffect } from "react";
import axios from "axios";
import { X } from "lucide-react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    prodId: "",
    category: "",
    material: "",
    shape: "",
    color: "",
    application: "",
    feature: "",
    pattern: "",
    origin: "",
    moq: "",
    mrp: "",
    discountPercent: "",
    weight: "",
    stockQty: "",
    size: "",
    thickness: "",
    battenDistance: "",
    coverage: "",
    breakStrength: "",
    description: "",
    waterAbsorb: "",
    model: "",
    usage: "",
    qtyPerSqFt: "",
    type: "",
  });

  const [categories, setCategories] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("/api/allCategories");
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const totalFiles = [...productImages, ...files.slice(0, 5 - productImages.length)];
    const updatedImages = totalFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setProductImages(updatedImages);
  };

  const handleRemoveImage = (index) => {
    const updated = [...productImages];
    URL.revokeObjectURL(updated[index].preview);
    updated.splice(index, 1);
    setProductImages(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (productImages.length === 0) {
      setMessage("Please upload at least one product image.");
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const form = new FormData();
      Object.keys(formData).forEach((key) => form.append(key, formData[key]));
      productImages.forEach(({ file }) => form.append("productImages", file));

      const res = await axios.post("/api/addProducts", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage(res.data.message || "Product added successfully!");
      setFormData({
        productName: "",
        prodId: "",
        category: "",
        material: "",
        shape: "",
        color: "",
        application: "",
        feature: "",
        pattern: "",
        origin: "",
        moq: "",
        mrp: "",
        discountPercent: "",
        weight: "",
        stockQty: "",
        size: "",
        thickness: "",
        battenDistance: "",
        coverage: "",
        breakStrength: "",
        description: "",
        waterAbsorb: "",
        model: "",
        usage: "",
        qtyPerSqFt: "",
        type: "",
      });
      productImages.forEach((img) => URL.revokeObjectURL(img.preview));
      setProductImages([]);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Error adding product. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-10 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Add New Product
      </h2>

      {message && (
        <div
          className={`p-3 mb-6 rounded-lg text-center font-medium ${
            message.includes("successfully")
              ? "bg-green-100 text-green-700 border border-green-200"
              : "bg-red-100 text-red-700 border border-red-200"
          }`}
        >
          {message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* -------- Column 1 -------- */}
        <div className="space-y-5">
          {[
            ["Category", "category", "select"],
            ["Product Name", "productName", "text"],
            ["Product ID", "prodId", "text"],
            ["Minimum Order Quantity", "moq", "number"],
            ["MRP", "mrp", "number"],
            ["Discount (%)", "discountPercent", "number"],
            ["Stock Quantity", "stockQty", "number"],
            ["Application", "application", "text"],
          ].map(([label, name, type]) => (
            <div key={name}>
              <label className="block text-gray-700 font-medium mb-1">{label}</label>
              {type === "select" ? (
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.catname}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                />
              )}
            </div>
          ))}
        </div>

        {/* -------- Column 2 -------- */}
        <div className="space-y-5">
          {[
            ["Material", "material"],
            ["Shape", "shape"],
            ["Color", "color"],
            ["Pattern", "pattern"],
            ["Origin", "origin"],
            ["Feature", "feature"],
            ["Usage", "usage"],
            ["Size", "size"],
          ].map(([label, name]) => (
            <div key={name}>
              <label className="block text-gray-700 font-medium mb-1">{label}</label>
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}
        </div>

        {/* -------- Column 3 -------- */}
        <div className="space-y-5">
          {[
            ["Thickness", "thickness"],
            ["Batten Distance", "battenDistance"],
            ["Coverage", "coverage"],
            ["Breaking Strength", "breakStrength"],
            ["Water Absorbance", "waterAbsorb"],
            ["Weight", "weight"],
            ["Model", "model"],
            ["Quantity per Sq.ft", "qtyPerSqFt"],
            ["Type", "type"],
          ].map(([label, name]) => (
            <div key={name}>
              <label className="block text-gray-700 font-medium mb-1">{label}</label>
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}
        </div>

        {/* -------- Description (spans 2 columns) -------- */}
        <div className="md:col-span-2 space-y-2">
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* -------- Image Upload (spans 1 column) -------- */}
        <div className="space-y-3">
          <label className="block text-gray-700 font-medium">Product Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
          {productImages.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {productImages.map((img, index) => (
                <div key={index} className="relative border rounded-lg overflow-hidden">
                  <img
                    src={img.preview}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 bg-black bg-opacity-70 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* -------- Submit -------- */}
        <div className="md:col-span-3 flex justify-center mt-6">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-10 rounded-lg transition duration-200 shadow-md"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
