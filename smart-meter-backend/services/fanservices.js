const { type } = require('express/lib/response');
const Fan = require('../model/fan');
const ElectricMeter = require('../model/electricMeter');
const Light = require('../model/light');
const Service = require('../model/service');
const Event = require('../model/event');
const moment = require('moment');
const { default: mongoose } = require('mongoose');

class FanServices {
  static addMeterdetails = async (data,id) => {
    try {
      const query = {
        userId: id,
        electricMeterName: data.electricMeterName,
        marker: data.marker,
        marker: data.marker,
        model: data.model,
        location: data.location,
        electricCapacity: data.electricCapacity,
        meausurementAccuracy: data.meausurementAccuracy,
        dimensions: data.dimesions,
        design: data.design,
        deploymentDate: data.deploymentDate,
        installationDate: data.installationDate,
        power: data.power,
      };
      const newMeter = new ElectricMeter(query);
      await newMeter.save();
      return { newMeter };
    } catch (err) {
      console.log(err);
      console.log('Some unexpected error occured while adding electric meter');
    }
  };

  static deleteMeter = async (data) => {
    try {
      const query = {
        _id: data.id,
      };

      const oldMeter = await ElectricMeter.remove(query);

      console.log(oldMeter);
      return { oldMeter };
    } catch (err) {
      console.log(err);
      console.log(
        'Some unexpected error occured while deleting electric meter'
      );
    }
  };

  static updateMeter = async (id, data) => {
    try {
      const query = {
        _id: id,
      };

      const updatedMeter = await ElectricMeter.findOneAndUpdate(query, data);

      if (updatedMeter) {
        return { updatedMeter };
      }
    } catch (err) {
      console.log(err);
      console.log(
        'Some unexpected error occured while updating electric meter'
      );
    }
  };

  static getAllMeters = async (id) => {
    console.log(id)
    try {
      const meters = await ElectricMeter.find({userId:id});

      if (meters?.length > 0) {
        return meters;
      }
      else{
        return []
      }
    } catch (err) {
      console.log(err);
      console.log('Some unexpected error occured while fetching meters');
    }
  };

  static getMeterById = async (id) => {
    try {
      const meter = await ElectricMeter.findById(id);
      if (meter) {
        return { meter };
      }
    } catch (err) {
      console.log(err);
      console.log('Some unexpected error occured while fetching meters');
    }
  };

  // static getFandetails = async (data) => {
  //   console.log(data);
  //   try {
  //     const query = {
  //       userId: data.userId,
  //     };
  //     let foundFans = await Fan.find({ userId: query['userId'] });
  //     if (foundFans != []) {
  //       console.log(foundFans);
  //       return foundFans;
  //     } else {
  //       console.log('no user found');
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     console.log('Some unexpected error occured while logging in');
  //   }
  // };

  static getFanById = async (id) => {
    try {
      const meter = await Fan.findById(id);
      if (meter) {
        return { meter };
      }
    } catch (err) {
      console.log(err);
      console.log('Some unexpected error occured while fetching fan');
    }
  };
  static getAllFans = async (id) => {
    try {
      const meters = await Fan.find({userId:id});

      if (meters?.length > 0) {
        return meters;
      }
      else{
        return []
      }
    } catch (err) {
      console.log(err);
      console.log('Some unexpected error occured while fetching meters');
    }
  };

  static updateFandetails = async (id, data) => {
    try {
      const query = {
        _id: id,
      };

      const updatedMeter = await Fan.findOneAndUpdate(query, data);

      if (updatedMeter) {
        return { updatedMeter };
      }
    } catch (err) {
      console.log(err);
      console.log(
        'Some unexpected error occured while updating electric meter'
      );
    }
  };
  static deleteFandetails = async (data) => {
    try {
      const query = {
        _id: data.id,
      };

      const oldMeter = await Fan.remove(query);

      console.log(oldMeter);
      return { oldMeter };
    } catch (err) {
      console.log(err);
      console.log(
        'Some unexpected error occured while deleting electric meter'
      );
    }
  };

  // static updateFandetails = async (data) => {
  //   console.log(data);
  //   try {
  //     const query = {
  //       fanId: data.fanId,
  //     };
  //     const newvalues = {
  //       $set: {
  //         fanName: data.fanName,
  //         location: data.location,
  //         model:data.model,
  //         speed: data.speed,
  //         design: data.design,
  //         weight: data.weight,
  //         installationDate: data.installationDate,
  //         dimensions: data.dimesions,
  //         deploymentDate: data.deploymentDate,
  //         power: data.power,
  //         active: data.active,
  //         start: data.start,
  //         connectedToCloud: data.connectedToCloud,
  //       },
  //     };
  //     let updatedFan = await Fan.updateOne(
  //       { fanId: query['famId'] },
  //       newvalues
  //     );
  //     if (updatedFan == 1) {
  //       console.log(updatedFan);
  //       return updatedFan;
  //     } else {
  //       console.log(updatedFan);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     console.log('Some unexpected error occured while logging in');
  //   }
  // };
  // we dont have a ctrl api for this yet we are confused if we will use post or put or patch....

  // static deleteFandetails = async (data) => {
  //   console.log(data);
  //   try {
  //     const query = {
  //       fanId: data.fanId,
  //     };
  //     await Fan.deleteOne({ fanId: query['fanId'] }, function (err, res) {
  //       if (err) {
  //         console.log(err);
  //         return false;
  //       } else {
  //         console.log('res:' + res);
  //       }
  //     });
  //     return true;
  //   } catch (err) {
  //     console.log(err);
  //     console.log('Some unexpected error occured while logging in');
  //   }
  // };
  // this above api is working fone but is showing error messages and then is executing the query.
  /**
         * output is :
        { fanId: '1' }
        MongooseError: Query was already executed: Fan.deleteOne({ fanId: 1 })
        at model.Query._wrappedThunk [as _deleteOne] (C:\Users\Home\Desktop\smart_meter\smart-meter\be\node_modules\mongoose\lib\helpers\query\wrapThunk.js:23:19)
        at C:\Users\Home\Desktop\smart_meter\smart-meter\be\node_modules\kareem\index.js:426:25
        at processTicksAndRejections (node:internal/process/task_queues:78:11) {
        originalStack: 'Error\n' +
        '    at model.Query._wrappedThunk [as _deleteOne] (C:\\Users\\Home\\Desktop\\smart_meter\\smart-meter\\be\\node_modules\\mongoose\\lib\\helpers\\query\\wrapThunk.js:27:28)\n' +
        '    at C:\\Users\\Home\\Desktop\\smart_meter\\smart-meter\\be\\node_modules\\kareem\\index.js:426:25\n' +
        '    at processTicksAndRejections (node:internal/process/task_queues:78:11)'
        }
        Some unexpected error occured while logging in
        result:undefined
        res:[object Object]
         * 
         */
  static addFandetails = async (data,id) => {
    try {
      const query = {
        userId: id,
        fanId: data.fanId,
        fanName: data.fanName,
        location: data.location,
        manufacturer: data.manufacturer,
        model: data.model,
        speed: data.speed,
        design: data.design,
        weight: data.weight,
        installationDate: data.installationDate,
        dimensions: data.dimesions,
        deploymentDate: data.deploymentDate,
        power: data.power,
      };
      const newMeter = new Fan(query);
      await newMeter.save();
      return { newMeter };
    } catch (err) {
      console.log(err);
      console.log('Some unexpected error occured while adding electric meter');
    }
  };

  // static addFandetails = async (data) => {
  //   console.log(data);
  //   try {
  //     const newvalues = {
  //       fanId: data.fanId,
  //       fanName: data.fanName,
  //       location: data.location,
  //       model:data.model,
  //       speed: data.speed,
  //       design: data.design,
  //       weight: data.weight,
  //       installationDate: data.installationDate,
  //       dimensions: data.dimesions,
  //       deploymentDate: data.deploymentDate,
  //       power: data.power,
  //       active: data.active,
  //       start: data.start,
  //       connectedToCloud: data.connectedToCloud,
  //       // userId: data.userId,
  //     };
  //     await Fan.insertMany(newvalues, function (err, res) {
  //       if (err) {
  //         console.log('insertion is givng error');
  //         console.log(err);
  //         return false;
  //       } else {
  //         console.log('inserted: ' + res.insertedCount);
  //         console.log('res:' + res);
  //       }
  //     });
  //     return true;
  //   } catch (err) {
  //     console.log(err);
  //     console.log('Some unexpected error occured while logging in');
  //   }
  // };
  static addLightdetails = async (data,id) => {
    try {
      const query = {
        userId: id,
        lightId: data.lightId,
        lightName: data.lightName,
        location: data.location,
        manufacturer: data.manufacturer,
        model: data.model,
        illumination: data.illumination,
        illuminationTime: data.illuminationTime,
        wattage: data.wattage,
        installationDate: data.installationDate,
        dimensions: data.dimesions,
        deploymentDate: data.deploymentDate,
        power: data.power,
      };
      const newMeter = new Light(query);
      await newMeter.save();
      return { newMeter };
    } catch (err) {
      console.log(err);
      console.log('Some unexpected error occured while adding electric meter');
    }
  };

  static deleteLight = async (data) => {
    // console.log('line:', data);
    try {
      const query = {
        _id: data.id,
      };

      const oldMeter = await Light.remove(query);

      console.log(oldMeter);
      return { oldMeter };
    } catch (err) {
      console.log(err);
      console.log(
        'Some unexpected error occured while deleting electric meter'
      );
    }
  };

  static updateLight = async (id, data) => {
    try {
      const query = {
        _id: id,
      };

      const updatedMeter = await Light.findOneAndUpdate(query, data);

      if (updatedMeter) {
        return { updatedMeter };
      }
    } catch (err) {
      console.log(err);
      console.log(
        'Some unexpected error occured while updating electric meter'
      );
    }
  };

  static getAllLight = async (id) => {
    try {
      const meters = await Light.find({userId:id});

      if (meters?.length > 0) {
        return meters;
      }
      else{
        return []
      }
    } catch (err) {
      console.log(err);
      console.log('Some unexpected error occured while fetching meters');
    }
  };

  static getLightById = async (id) => {
    try {
      const meter = await Light.findById(id);
      if (meter) {
        return { meter };
      }
    } catch (err) {
      console.log(err);
      console.log('Some unexpected error occured while fetching meters');
    }
  };

  static updateMeterActiveStatus = async (id, status) => {
    try {
      var query = { _id: id };
      if(status == "true")
      {
        var newvalues = { active: true };
      }
      else
      {
        var newvalues = { active: false };

      }

      let updatedMeter = await ElectricMeter.findOneAndUpdate(query, newvalues);
      updatedMeter.active = newvalues.active;

      if (updatedMeter) {
        return updatedMeter;
      } else {
        //   console.log(updatedFan);
      }
    } catch (err) {
      //  console.log(err);
      //  console.log("Some unexpected error occured while logging in")
    }
  };

  static updateFanActiveStatus = async (id, status) => {
    try {
      var query = { _id: id };
      if(status == "true")
      {
        var newvalues = { active: true };
      }
      else
      {
        var newvalues = { active: false };

      }

      let updatedFan = await Fan.findOneAndUpdate(query, newvalues);
      updatedFan.active = newvalues.active;

      if (updatedFan) {
        console.log(updatedFan);
        return updatedFan;
      } else {
        //   console.log(updatedFan);
      }
    } catch (err) {
      //  console.log(err);
      //  console.log("Some unexpected error occured while logging in")
    }
  };

  static updateLightActiveStatus = async (id,status) => {
    try {
      var query = { _id: id };
      if(status == "true")
      {
        var newvalues = { active: true };
      }
      else
      {
        var newvalues = { active: false };

      }

      let updatedLight = await Light.findOneAndUpdate(query, newvalues);
      updatedLight.active = newvalues.active;
      if (updatedLight) {
        return updatedLight;
      } else {
        //   console.log(updatedFan);
      }
    } catch (err) {
      //  console.log(err);
      //  console.log("Some unexpected error occured while logging in")
    }
  };

  static updateMeterStartStatus = async (id, status,user) => {
    // console.log('Line 443:', id, status, typeof status);
    try {

      if(status === "true")
      {
        console.log("...445   ",id,status)

        const query = {
          type: 'meter',
          deviceId: id,
          startTime: Date.now(),
          userId: user
        };

        const newEvent = new Event(query);
        await newEvent.save();

        let eventId = newEvent._id;

        let meter = await ElectricMeter.findById(id);

        if (
          moment(meter.today).format('LL') != moment(Date.now()).format('LL')
        ) {
          let deleteMetersTodaysEvents = await ElectricMeter.findOneAndUpdate(
            { _id: id },
            { $set: { todaysEvents: [] }, totalSeconds: 0, today: Date.now() }
          );
        }
        let updatedMeter = await ElectricMeter.findOneAndUpdate(
          { _id: id },
          {
            currentEvent: eventId,
            start: true,
            $push: { todaysEvents: eventId },
          }
        );
        updatedMeter.currentEvent = eventId;
        updatedMeter.start = true;
        return {updatedMeter}
      }
      else if(status === "false")
      {
        let meter = await ElectricMeter.findById(id);
        let currentEventId = meter.currentEvent;

        let currentEvent = await Event.findById(currentEventId);

        let endTime = Date.now();

        let diff = moment(endTime).diff(
          moment(currentEvent.startTime),
          'second'
        );

        let updatedEvent = await Event.findOneAndUpdate(
          { _id: currentEventId },
          { endTime: endTime, totalSeconds: diff, start: false }
        );

        updatedEvent.endTime = endTime;
        updatedEvent.totalSeconds = diff;
        let updatedMeter = await ElectricMeter.findOneAndUpdate(
          { _id: id },
          { currentEvent: null, start: false, $inc: { totalSeconds: diff } }
        );
        updatedMeter.currentEvent = null;
        updatedMeter.start = false;
        updatedMeter.totalSeconds = updatedMeter.totalSeconds + diff;
        return { updatedMeter };
      }
    } catch (err) {
      console.log(err);
      console.log('Some unexpected error occured while logging in');
    }
  };



  static updateLightStartStatus = async (id,status,user) => {
    try {

      if(status === "true")
      {

        const query = {
          type: "light",
          deviceId: id,
          startTime: Date.now(),
          userId: user
         };
        
        const newEvent = new Event(query);
        await newEvent.save();
        
        let eventId= newEvent._id;
        
        let light = await Light.findById(id);

        if(moment(light.today).format('LL') != moment(Date.now()).format('LL'))
        {
            let deleteLightsTodaysEvents = await Light.findOneAndUpdate({_id:id},{$set : {todaysEvents: [] }, totalSeconds:0,today:Date.now()});
        }
        let updatedLight = await Light.findOneAndUpdate({_id:id},{currentEvent:eventId,start:true, $push:{todaysEvents: eventId}})
        updatedLight.currentEvent = eventId;
        updatedLight.start = true;
        return {updatedLight}
      }
      else if(status === "false")
      {
        let light = await Light.findById(id);
        let currentEventId = meter.currentEvent
        
        let currentEvent = await Event.findById(currentEventId);

        let endTime = Date.now();

        let diff = moment(endTime).diff( moment(currentEvent.startTime),'second');

        
        let updatedEvent = await Event.findOneAndUpdate({_id:currentEventId},{endTime: endTime, totalSeconds: diff,start:false});
        
        updatedEvent.endTime = endTime;
        updatedEvent.totalSeconds = diff;
        let updatedLight = await Light.findOneAndUpdate({_id:id},{currentEvent:null,start:false,$inc: {totalSeconds : diff }})
        updatedLight.currentEvent=null;
        updatedLight.start=false;
        updatedLight.totalSeconds=updatedLight.totalSeconds+diff;
        return {updatedLight}

      }
    } catch (err) {
       console.log(err);
       console.log("Some unexpected error occured while logging in")
    }
  };



  static updateFanStartStatus = async (id,status,user) => {
    try {

      if(status === "true")
      {

        const query = {
          type: "fan",
          deviceId: id,
          startTime: Date.now(),
          userId: user
         };
        
        const newEvent = new Event(query);
        await newEvent.save();
        
        let eventId= newEvent._id;
        
        let fan = await Fan.findById(id);

        if(moment(fan.today).format('LL') != moment(Date.now()).format('LL'))
        {
            let deleteFansTodaysEvents = await Fan.findOneAndUpdate({_id:id},{$set : {todaysEvents: [] }, totalSeconds:0,today:Date.now()});
        }
        let updatedFan = await Fan.findOneAndUpdate({_id:id},{currentEvent:eventId,start:true, $push:{todaysEvents: eventId}})
        updatedFan.currentEvent = eventId;
        updatedFan.start = true;
        return {updatedFan}
      }
      else if(status === "false")
      {
        let fan = await Fan.findById(id);
        let currentEventId = meter.currentEvent
        
        let currentEvent = await Event.findById(currentEventId);

        let endTime = Date.now();

        let diff = moment(endTime).diff( moment(currentEvent.startTime),'second');

        
        let updatedEvent = await Event.findOneAndUpdate({_id:currentEventId},{endTime: endTime, totalSeconds: diff,start:false});
        
        updatedEvent.endTime = endTime;
        updatedEvent.totalSeconds = diff;
        let updatedFan = await Fan.findOneAndUpdate({_id:id},{currentEvent:null,start:false,$inc: {totalSeconds : diff }})
        updatedFan.currentEvent=null;
        updatedFan.start=false;
        updatedFan.totalSeconds=updatedMeter.totalSeconds+diff;
        return {updatedFan}

      }
    } catch (err) {
       console.log(err);
       console.log("Some unexpected error occured while logging in")
    }
  };


  static getAllEvents = async (id) => {
    try {

      
        
        const Events = Event.find({paymentStatus:false,userId:id});
        await newEvent.save();
        
        if(Events)
        {
          return {Events}

        }
      }
      
     catch (err) {
       console.log(err);
       console.log("Some unexpected error occured while logging in")
    }
  };



  static todayMeterMonitoring = async (data) => {
    try {
      // console.log(moment().format('LL'))
      let a = moment(Date.now()).format('LL');
      let b = moment().add(120, 'minutes').format('LL');
      console.log(a == b);
      console.log(a);
      console.log(b);
      const meters = await ElectricMeter.find().populate('todaysEvents');
      return { meters };
    } catch (err) {
      console.log(err);
      console.log('Some unexpected error occured while adding electric meter');
    }
  };

  static addService = async (data) => {
    try {
      const query = {
        serviceType: data.serviceType,
        serviceDescription: data.serviceDescription,
      };
      const newMeter = new Service(data);
      await newMeter.save();
      return { newMeter };
    } catch (err) {
      console.log(err);
      console.log('Some unexpected error occured while adding electric meter');
    }
  };

  static updateService = async (id) => {
    try {
      const query = {
        _id: id,
      };
      console.log(id);
      var newvalues = { status: 'Resolved' };

      const updatedMeter = await Service.findOneAndUpdate(query, newvalues);

      if (updatedMeter) {
        return { updatedMeter };
      }
    } catch (err) {
      console.log(err);
      console.log(
        'Some unexpected error occured while updating electric meter'
      );
    }
  };

  static getAllService = async (id, data) => {
    try {
      const meters = await Service.find();

      if (meters?.length > 0) {
        return meters;
      }
    } catch (err) {
      console.log(err);
      console.log('Some unexpected error occured while fetching meters');
    }
  };
}

module.exports.FanServices = FanServices;
