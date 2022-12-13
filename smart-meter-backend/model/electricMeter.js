const mongoose = require('mongoose');
const electricMeterSchema = new mongoose.Schema(
  {
    electricMeterId: {
      type: String,
    },
    electricMeterName: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    location: {
      type: String,
    },
    manufacturer: {
      type: String,
    },
    model: {
      type: String,
    },
    electricCapacity: {
      type: String,
    },
    installationMethod: {
      type: String,
    },
    currentEvent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'events',
      required: false,
    },
    todaysEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'events',
        default: null,
      },
    ],
    meausurementAccuracy: {
      type: String,
    },
    dimensions: {
      type: String,
    },
    deploymentDate: {
      type: Date,
      default: Date.now,
    },
    installationDate: {
      type: Date,
      default: Date.now,
    },
    power: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
    start: {
      type: Boolean,
      default: false,
    },
    connectedToCloud: {
      type: Boolean,
      default: false,
    },
    today: {
      type: Date,
      default: Date.now(),
    },
    totalSeconds: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ElectricMeter', electricMeterSchema);
