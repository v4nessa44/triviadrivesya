
const express = require("express");
const matchupRoutes = require("./matchup-routes");
const techRoutes = require("./tech-routes.js");
const userRoutes = require("./userRoutes");
const gameHistoryRoutes = require("./gamehistory-routes.js");

const router = express.Router();

router.use("/matchup", matchupRoutes);
router.use("/tech", techRoutes);
router.use("/users", userRoutes);
router.use("/gamehistory", gameHistoryRoutes);

module.exports = router;