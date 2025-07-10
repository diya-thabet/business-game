const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  basePrice: { type: Number, required: true },
  productionCost: { type: Number, required: true },
  demand: { type: Number, default: 100 },
  logisticsCost: { type: Number, required: true },
  weight: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);
