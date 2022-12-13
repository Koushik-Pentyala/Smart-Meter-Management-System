const mongoose = require('mongoose');
const lightSchema = new mongoose.Schema(
  {
    // airline_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"airline"
    // },
    // airlineName: String,
    lightId:{
      type: String,
    },
    lightName: {
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

    illumination: {
        type: String,
  
      },
    illuminationTime: {
      type: String,

    },
    wattage: {
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
  today:{
    type:Date,
    default: Date.now()
  },
  totalSeconds:{
    type:Number,
    required: false
  }

  },
  { timestamps: true }
);

module.exports = mongoose.model('Light', lightSchema);
