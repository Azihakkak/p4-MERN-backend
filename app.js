const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");

const app = express();

// we have to parse the body and then reach the routes where you need the body

app.use(bodyParser.json());

app.use("/api/places", placesRoutes); // only routes that starts with /api/places can get through

// we trigger this middleware by either throw a new error in syncronous JS or calling next(error) in async code.(most of the time calling next) in our routes.
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error has occured" });
});

app.listen(5000);
