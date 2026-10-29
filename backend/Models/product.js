import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    enum: ["Books", "Electronics", "Furniture", "Notes"],
    required: true,
  },

  condition: {
    type: String,
    enum: ["New", "Like New", "Used"],
    required: true,
  },

  listingType: {
    type: String,
    enum: ["Sell", "Exchange"],
    required: true,
  },

  price: {
    type: Number,
    required: true,
    min: 0,
  },

  city: {
    type: String,
    enum: ["Abbottabad", "Islamabad", "Lahore", "Karachi"],
    required: true,
  },

  university: {
    type: String,
    enum: [
      "COMSATS University Islamabad",
      "University of Abbottabad",
      "Other",
    ],
    required: true,
  },

  campus: {
    type: String,
    enum: ["Abbottabad Campus", "Islamabad Campus", "Other"],
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  images: {
    type: [String],
    default: [],
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
