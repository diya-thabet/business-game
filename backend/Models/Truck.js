const mongoose = require("mongoose");

const truckSchema = new mongoose.Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  purchaseCost: { type: Number, required: true },
  maintenanceCost: { type: Number, required: true },
  fuelEfficiency: { type: Number, required: true },
});

module.exports = mongoose.model("Truck", truckSchema);
