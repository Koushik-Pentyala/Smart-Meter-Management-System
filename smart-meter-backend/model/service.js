const mongoose = require('mongoose');
const serviceSchema = new mongoose.Schema({
  serviceType: {
    type: String,
  },
  serviceDescription: {
    type: String,
  },
  status: {
    type: String,
    default:"In progress"
  },
  userID:{
    type: String,
    default:"Bruce"
  }
  },
  { timestamps: true }

);
module.exports = mongoose.model('Service', serviceSchema);
