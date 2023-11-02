const express = require("express");

const {
  searchFlights,
  searchAirportCity,
} = require("../controllers/flightController");

const router = express.Router();

router.get(`/city-and-airport-search/:parameter`, searchAirportCity);

router.post("/search", searchFlights);

module.exports = router;
