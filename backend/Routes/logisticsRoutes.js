const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const Truck = require("../Models/Truck");
const Company = require("../Models/company");

router.post("/buy-truck", async (req, res) => {
  const { userId, truckId } = req.body;
  try {
    const user = await User.findById(userId);
    const truck = await Truck.findById(truckId);
    if (!user || !truck)
      return res.status(404).json({ message: "User or truck not found" });
    if (user.gameProgress.cash < truck.purchaseCost) {
      return res.status(400).json({ message: "Insufficient funds" });
    }
    user.gameProgress.cash -= truck.purchaseCost;
    user.gameProgress.trucks.push({
      truckId: truck._id,
      capacity: truck.capacity,
      maintenanceCost: truck.maintenanceCost,
      status: "active",
    });
    user.gameProgress.deliveryCapacity += truck.capacity;
    user.gameProgress.decisions.push({
      type: "buy-truck",
      details: { truckId, cost: truck.purchaseCost },
      timestamp: new Date(),
    });
    await user.save();
    res.json({ message: "Truck purchased", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.post("/form-partnership", async (req, res) => {
  const { userId, companyId, duration } = req.body;
  try {
    const user = await User.findById(userId);
    const company = await Company.findById(companyId);
    if (!user || !company)
      return res.status(404).json({ message: "User or company not found" });
    if (user.gameProgress.cash < company.contractCost) {
      return res.status(400).json({ message: "Insufficient funds" });
    }
    user.gameProgress.cash -= company.contractCost;
    user.gameProgress.partnerships.push({
      companyId: company._id,
      contractTerms: {
        duration,
        bonus: company.deliveryBonus,
        capacity: company.capacityShare,
      },
    });
    user.gameProgress.deliveryCapacity += company.capacityShare;
    user.gameProgress.decisions.push({
      type: "form-partnership",
      details: { companyId, cost: company.contractCost, duration },
      timestamp: new Date(),
    });
    await user.save();
    res.json({ message: "Partnership formed", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.post("/maintain-trucks", async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    let totalMaintenanceCost = 0;
    for (const truck of user.gameProgress.trucks) {
      const truckData = await Truck.findById(truck.truckId);
      totalMaintenanceCost += truckData.maintenanceCost;
    }
    if (user.gameProgress.cash < totalMaintenanceCost) {
      return res
        .status(400)
        .json({ message: "Insufficient funds for maintenance" });
    }
    user.gameProgress.cash -= totalMaintenanceCost;
    user.gameProgress.decisions.push({
      type: "maintain-trucks",
      details: { totalCost: totalMaintenanceCost },
      timestamp: new Date(),
    });
    await user.save();
    res.json({ message: "Trucks maintained", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.get("/available-trucks", async (req, res) => {
  try {
    const trucks = await Truck.find();
    res.json(trucks);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.get("/available-companies", async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
