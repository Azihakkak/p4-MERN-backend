const express = require("express");

const placesControllers = require("../controllers/places-controller");
const router = express.Router();
// it gives us a special object which we can register middleware and then we export the configured routes and import them into app.js and register this configured router as one single middleware in app.js.

router.get("/:pid", placesControllers.getPlaceById);

router.get("/user/:uid", placesControllers.getPlaceByUserId);

router.post("/", placesControllers.createPlace);

router.patch("/:pid", placesControllers.updatePlace);

router.delete("/:pid", placesControllers.deletePlace);

module.exports = router;
