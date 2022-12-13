const mongoose = require('mongoose');
const fanSchema = new mongoose.Schema(
  {
    fanId: {
      type: String,
    },
    fanName: {
      type: String,
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

    speed: {
      type: String,
    },
    design: {
      type: String,
    },
    weight: {
      type: String,
    },
    installationDate: {
      type: Date,
      default: Date.now,
    },
    dimensions: {
      type: String,
    },

    deploymentDate: {
      type: Date,
      default: Date.now,
    },

    power: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
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
  },

  { timestamps: true }
);

module.exports = mongoose.model('Fan', fanSchema);
