const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  accountID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  schedule: {
    from: {
      type: Date, required: true
    },
    to: {
      type: Date, required: true
    }
  }
}, {
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated'
  },
  id: false
});


const propertySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  geoLocation: {
    type: [Number, Number],
    default: [0, 0],
    required: true
  },
  bookings: [bookingSchema]
}, {
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated'
  },
  id: false
});

propertySchema.index({
  "geoLocation": '2dsphere'
});

mongoose.model('Booking', bookingSchema);

module.exports = mongoose.model('Property', propertySchema)
