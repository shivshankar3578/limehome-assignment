const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const PropertyModel = mongoose.model("Property");
const BookingModel = mongoose.model("Booking");

/* GET properties listing. */
router.get('/properties', function (req, res, next) {
  const point = req.query.at ? req.query.at.split(",").map(item=>Number(item)) : [];
  PropertyModel.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: point
        },
        spherical: true,
        distanceField: 'dist',
        distanceMultiplier: 0.000621371,
        maxDistance: 2
      }
    },
    {
      $project: {
        name: 1,
      }
    }
  ]).exec((err, results) => {
    if (err) return next(err);
    res.status(200).json(results);
  })
});

/* create booking */
router.post('/property/:propertyID/booking', function (req, res, next) {
  const booking = new BookingModel(req.body);
  PropertyModel.findByIdAndUpdate(req.params.propertyID, {
    $addToSet: {
      bookings: booking
    }
  },
  {
    upsert: false,
    new: true

  }, (err, results) => {
      if (err) return next(err);
      res.status(200).json(results);
    })
})

/* get booking of property */
router.get('/property/:propertyID/bookings', function (req, res, next) {
  PropertyModel.findById(req.params.propertyID, (err, results) => {
    if (err) return next(err);
    if (!results) return next(Error("property not found"))
    res.status(200).json(results.bookings);
  })
})

module.exports = router;
