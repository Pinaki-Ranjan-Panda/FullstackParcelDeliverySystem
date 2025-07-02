const mongoose = require("mongoose");

const ParcelSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    sendername: {
      type: String,
      required: true,
    },
    recipientname: {
      type: String,
      required: true,
    },
    senderemail: {
      type: String,
      required: true,
    },
    recipientemail: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    note: {
      type: String,
    },
    feedback: {
      type: String,
    },
    status: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Parcel", ParcelSchema);
