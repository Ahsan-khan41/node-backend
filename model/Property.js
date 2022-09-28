const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      min: 10,
    },
    price: {
      type: Number,
      required: true,
      min: 1,
    },
    beds: {
      type: Number,
      required: true,
      min: 1,
    },
    baths: {
      type: Number,
      required: true,
      min: 1,
    },
    details: {
      type: {
        type: String,
        required: true,
      },
      subType: {
        type: String,
      },
      area: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      address: {
        type: String,
        trim: true,
      },
      size: {
        type: Number,
        required: true,
        min: 1,
      },
      sizeUnit: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("property", PropertySchema);
