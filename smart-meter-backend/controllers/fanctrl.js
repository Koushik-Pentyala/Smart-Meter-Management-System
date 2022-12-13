const express = require('express');

const User = require('../model/user');
const { response } = require('../index.js');
const { FanServices } = require('../services/fanservices.js');
const router = express.Router();

router.get('/getLightById', async (req, res) => {
  const { id } = req.query;

  const response = {};
  try {
    let result = await FanServices.getLightById(id);
    if (result) {
      response.success = true;
      response.meters = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'cannot fetch the meter details ';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});
router.get('/getAllLight', async (req, res) => {
  let {id} = req.query; //req.query.userId;
  const response={}
  try {
    let result = await FanServices.getAllLight(id);

    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'some error occured...';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});
router.post('/updateLight', async (req, res) => {
  const { id } = req.query;
  const data = req.body;
  const response = {};
  try {
    let result = await FanServices.updateLight(id, data);
    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'cannot update ';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});
router.delete('/deleteLight', async (req, res) => {
  let data = req.query; //req.query.fanId;
  // console.log('Line ctrl', data);
  const response = {};
  try {
    let result = await FanServices.deleteLight(data);
    console.log('result:' + result);
    if (result) {
      response.success = true;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'some error occured...';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

router.post('/addLightdetails', async (req, res) => {
  //const data = req.body;
  console.log('here.....');
  const { id } = req.query;
  let data = req.body;
  const response = {};
  try {
    console.log(data);
    let result = await FanServices.addLightdetails(data,id);
    console.log(result);
    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'some error occured...';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

router.get('/getFanById', async (req, res) => {
  const { id } = req.query;

  const response = {};
  try {
    let result = await FanServices.getFanById(id);
    if (result) {
      response.success = true;
      response.meters = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'cannot fetch the meter details ';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});
router.get('/getAllFans', async (req, res) => {
  let {id} = req.query; //req.query.userId;
  const response = {};
  try {
    let result = await FanServices.getAllFans(id);

    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'some error occured...';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});
router.post('/updateFandetails', async (req, res) => {
  const { id } = req.query;
  const data = req.body;
  const response = {};
  try {
    let result = await FanServices.updateFandetails(id, data);
    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'cannot update ';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});
router.delete('/deleteFandetails', async (req, res) => {
  let data = req.query; //req.query.fanId;
  const response = {};
  try {
    let result = await FanServices.deleteFandetails(data);
    console.log('result:' + result);
    if (result) {
      response.success = true;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'some error occured...';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

router.post('/addFandetails', async (req, res) => {
  const { id } = req.query;
  //const data = req.body;
  console.log('here.....');
  let data = req.body;
  const response = {};
  try {
    console.log(data);
    let result = await FanServices.addFandetails(data,id);
    console.log(result);
    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'some error occured...';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

router.post('/addMeterdetails', async (req, res) => {
  // const data = req.body;
  console.log('here.....');
  const { id } = req.query;
  let data = req.body;
  const response = {};
  try {
    console.log(data);
    let result = await FanServices.addMeterdetails(data,id);
    console.log(result);
    if (result) {
      response.success = true;
      response.meter = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'some error occured...';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

router.get('/deleteMeter', async (req, res) => {
  const data = req.query;
  //console.log('here.....');
  //let data = req.body;
  const response = {};
  try {
    let result = await FanServices.deleteMeter(data);
    if (result.oldMeter.deletedCount == 1) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'no record found with given Id';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

router.post('/updateMeter', async (req, res) => {
  console.log('bleh');
  const { id } = req.query;
  const data = req.body;
  const response = {};
  try {
    let result = await FanServices.updateMeter(id, data);
    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'cannot update ';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

router.get('/getAllMeters', async (req, res) => {
  const {id} = req.query;
  const response={}
  try {
    let result = await FanServices.getAllMeters(id);
    if (result) {
      response.success = true;
      response.meters = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'cannot update ';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

router.get('/getMeterById', async (req, res) => {
  const { id } = req.query;

  const response = {};
  try {
    let result = await FanServices.getMeterById(id);
    if (result) {
      response.success = true;
      response.meters = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'cannot fetch the meter details ';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});


router.post('/updateMeterActiveStatus', async (req, res) => {
  //const data = req.body;
  let data = req.query;
  console.log('here.....');
  //let data = req.body;
  const response = {};
  try {
    //  console.log(data);
      let result = await FanServices.updateMeterActiveStatus(data,req.body);   
 //   console.log(result);
    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'some error occured...';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});



router.post('/updateFanActiveStatus', async (req, res) => {
  //const data = req.body;
  const { id,status } = req.query;
  console.log('here.....');
  //let data = req.body;
  const response = {};
  try {
    //  console.log(data);
      let result = await FanServices.updateFanActiveStatus(id,status);   
 //   console.log(result);
    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'some error occured...';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

router.post('/updateLightActiveStatus', async (req, res) => {
  //const data = req.body;
  const { id,status } = req.query;
  console.log('here.....');
  //let data = req.body;
  const response = {};
  try {
    //  console.log(data);
      let result = await FanServices.updateLightActiveStatus(id,status);   
 //   console.log(result);
    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'some error occured...';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

// monitoring
router.get('/updateMeterStartStatus', async (req, res) => {
  //const data = req.body;

  const { id, status,user } = req.query;

  console.log('here.....');
  //let data = req.body;
  const response = {};
  try {
    //  console.log(data);
    let result = await FanServices.updateMeterStartStatus(id, status,user);
    // console.log(result);
    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'some error occured...';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

router.get('/updateLightStartStatus', async (req, res) => {
  //const data = req.body;
  
  const { id,status,user} = req.query;

  console.log('here.....');
  //let data = req.body;
  const response = {};
  try {
    //  console.log(data);
      let result = await FanServices.updateLightStartStatus(id,status,user);   
 // console.log(result);
    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'some error occured...';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

router.get('/updateFanStartStatus', async (req, res) => {
  //const data = req.body;
  
  const { id,status,user } = req.query;

  console.log('here.....');
  //let data = req.body;
  const response = {};
  try {
    //  console.log(data);
      let result = await FanServices.updateFanStartStatus(id,status,user);   
 // console.log(result);
    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'some error occured...';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});


router.get('/getAllEvents', async (req, res) => {
  //const data = req.body;
  const {id} = req.query
  
  console.log('here.....');
  //let data = req.body;
  const response = {};
  try {
    //  console.log(data);
      let result = await FanServices.getAllEvents(id);   
 // console.log(result);
    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'some error occured...';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});


router.get('/todayMeterMonitoring', async (req, res) => {
  //const data = req.body;
  console.log('here.....');
  //let data = req.body;
  const response = {};
  try {
    //  console.log(data);
    let result = await FanServices.todayMeterMonitoring();
    //   console.log(result);
    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'some error occured...';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

router.post('/addService', async (req, res) => {
  // const data = req.body;
  console.log('here.....');
  let data = req.body;
  const response = {};
  try {
    console.log(data);
    let result = await FanServices.addService(data);
    console.log(result);
    if (result) {
      response.success = true;
      response.meter = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'some error occured...';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

router.post('/updateService', async (req, res) => {
  console.log('bleh');
  const { id } = req.query;
  // const data = req.body;
  const response = {};
  try {
    let result = await FanServices.updateService(id);
    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'cannot update ';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

router.get('/getAllService', async (req, res) => {
  const response = {};
  try {
    let result = await FanServices.getAllService();
    if (result) {
      response.success = true;
      response.meters = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'cannot update ';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

// router.patch('/updateCloudStatus', async (req, res) => {
//   //const data = req.body;
//   let data = req.query;
//   console.log('here.....');
//   //let data = req.body;
//   const response = {};
//   try {
//     //  console.log(data);
//       let result = await FanServices.updateFanCloudStatus(data,req.body);
//  //   console.log(result);
//     if (result) {
//       response.success = true;
//       response.user = result;
//       response.status = '200';
//       res.status(200).send(response);
//     } else {
//       response.success = false;
//       response.error = 'some error occured...';
//       response.status = '400';
//       res.status(400).send(response);
//     }
//   } catch (e) {
//     console.log(e);
//     response.success = false;
//     response.error = 'Some error occurred. Please try again later';
//     response.status = '500';
//     res.status(500).send(response);
//   }
// });

// router.patch('/updateWorkingStatus', async (req, res) => {
//   //const data = req.body;
//   let data = req.query;
//   console.log('here.....');
//   //let data = req.body;
//   const response = {};
//   try {
//     //  console.log(data);
//       let result = await FanServices.updateWorkingStatus(data,req.body);
//  //   console.log(result);
//     if (result) {
//       response.success = true;
//       response.user = result;
//       response.status = '200';
//       res.status(200).send(response);
//     } else {
//       response.success = false;
//       response.error = 'some error occured...';
//       response.status = '400';
//       res.status(400).send(response);
//     }
//   } catch (e) {
//     console.log(e);
//     response.success = false;
//     response.error = 'Some error occurred. Please try again later';
//     response.status = '500';
//     res.status(500).send(response);
//   }
// });

module.exports = router;
