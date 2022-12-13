const config = {};
//const conn = `mongodb+srv://admin:admin@cluster0.yc89d4r.mongodb.net/?retryWrites=true&w=majority`;
const conn = `mongodb+srv://admin:admin123@cluster0.e4imw64.mongodb.net/test?retryWrites=true&w=majority`;

const mongoose = require('mongoose');

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(conn, {
      maxPoolSize: 100,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to DB !!');
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
