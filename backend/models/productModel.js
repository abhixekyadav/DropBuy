const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true,
    maxLength: [100, "Product Name Cannot Exceed 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter Product Price"],
    maxLength: [5, "Product Price Cannot Exceed 5 characters"],
    default: 0,
  },
  description: {
    type: String,
    required: [true, "Please Enter Product Description"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Select Product Category"],
    enum: {
      values: [
        "Appliances",
        "Beauty and Personal Care",
        "Books",
        "Cell Phones and Accessories",
        "Clothing, Shoes and Jewelry",
        "Computers",
        "Electronics",
        "Grocery and Gourmet Food",
        "Health, Household and Baby Care",
        "Home and Kitchen",
        "Luggage and Travel Gear",
        "Musical Instruments",
        "Sports and Outdoors",
        "Toys and Games",
        "Video Games",
      ],
      message: "Please Select Correct Product Category",
    },
  },
  seller: {
    type: String,
    required: [true, "Please Enter Product Seller"],
  },
  stock: {
    type: Number,
    required: [true, "Please Enter Product Stock"],
    maxLength: [5, "Product Quantity Cannot Exceed 5 characters"],
  },
  numberOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
