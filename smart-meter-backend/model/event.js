const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema(
  {

    type: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },

    deviceId:
    {
        type:String,
        required:true
    },
    startTime: {
      type: Date,
      required: false,
    },
    endTime: {
      type: Date,
      required: false,
    },
    totalSeconds:
    {
        type:Number,
        default:0,
        required:false
    },
    paymentStatus:{
        type:String,
        default: false,
    }


  },
  { timestamps: true },)

module.exports = mongoose.model('events', eventSchema);
