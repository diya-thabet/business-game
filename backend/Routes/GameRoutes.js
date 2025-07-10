const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const Product = require("../Models/Product");

router.post("/decision", async (req, res) => {
  const { userId, decisionType, details } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    let profitImpact = 0;
    if (decisionType === "purchase") {
      const product = await Product.findById(details.productId);
      const totalCost =
        details.quantity * (product.productionCost + product.logisticsCost);
      if (user.gameProgress.cash < totalCost)
        return res.status(400).json({ message: "Insufficient funds" });
      user.gameProgress.cash -= totalCost;
      const inventoryItem = user.gameProgress.inventory.find(
        (item) => item.productId === details.productId
      );
      if (inventoryItem) {
        inventoryItem.quantity += details.quantity;
        inventoryItem.cost =
          (inventoryItem.cost * inventoryItem.quantity + totalCost) /
          (inventoryItem.quantity + details.quantity);
      } else {
        user.gameProgress.inventory.push({
          productId: details.productId,
          quantity: details.quantity,
          cost: totalCost / details.quantity,
        });
      }
    } else if (decisionType === "sell") {
      const product = await Product.findById(details.productId);
      const inventoryItem = user.gameProgress.inventory.find(
        (item) => item.productId === details.productId
      );
      if (!inventoryItem || inventoryItem.quantity < details.quantity) {
        return res.status(400).json({ message: "Insufficient inventory" });
      }
      const totalWeight = details.quantity * product.weight;
      if (totalWeight > user.gameProgress.deliveryCapacity) {
        return res
          .status(400)
          .json({ message: "Insufficient delivery capacity" });
      }
      const revenue =
        details.quantity * product.basePrice * (1 + Math.random() * 0.2 - 0.1);
      inventoryItem.quantity -= details.quantity;
      profitImpact = revenue - details.quantity * inventoryItem.cost;
      user.gameProgress.cash += revenue;
      user.gameProgress.profit += profitImpact;
    }

    user.gameProgress.decisions.push({
      type: decisionType,
      details,
      timestamp: new Date(),
    });
    await user.save();
    res.json({ message: "Decision processed", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.get("/leaderboard", async (req, res) => {
  try {
    const users = await User.find()
      .sort({ "gameProgress.profit": -1 })
      .limit(10);
    res.json(
      users.map((u) => ({
        username: u.username,
        profit: u.gameProgress.profit,
      }))
    );
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
