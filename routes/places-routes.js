const express = require("express");

const placesController = require("../controllers/places-controller");
const router = express.Router();
// it gives us a special object which we can register middleware and then we export the configured routes and import them into app.js and register this configured router as one single middleware in app.js.

router.get("/:pid", placesController.getPlaceById);

router.get("/user/:uid", placesController.getPlacesByUserId);

router.post("/", placesController.createPlace);

router.patch("/:pid", placesController.updatePlace);

router.delete("/:pid", placesController.deletePlace);

module.exports = router;
