// we can place our middleware functions here and in routes just point to these controllers

const { v4: uuid } = require("uuid");
const HttpError = require("../models/http-error");

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid; // params property hold an object where our dynamic segment will exist as keys and the value will be the concrete value that the user who sends the request enters as part of URL. { pid: 'p1' }
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });
  if (!place) {
    return next(
      new HttpError("Could not find a place for the provided id.", 404)
    );
  }
  // send back some data in json format. it can take anything and convert it into json
  res.json({ place }); // { place } => { place: place } if the name of the property is equal to the name of the variable
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });

  if (!place) {
    // standard code for not finding anything for a given input(404) and then call json to send some data
    return next(
      new HttpError("Could not find a place for the provided user id.", 404)
    );
  }
  res.json({ place });
};

const createPlace = (req, res, next) => {
  // in post requests we expect to get data from the body of the request we have to parse the body in app.js first then we have access to req.body
  const { title, description, coordinates, address, creator } = req.body;
  const createdPlace = {
    id: uuid(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };
  DUMMY_PLACES.push(createdPlace);
  res.status(201).json({ place: createdPlace });
};

// exporting multiple function instead of module.export = ... which allow us to only export one thing.
exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;