const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  reliability: { type: Number, required: true },
  contractCost: { type: Number, required: true },
  deliveryBonus: { type: Number, required: true },
  capacityShare: { type: Number, required: true },
});

module.exports = mongoose.model("Company", companySchema);
