import axios from 'axios';

export const findDeviceById = async (id) => {
  return await axios.get(`/api/fan/getMeterById?id=${id}`);
};

export const findAllDevices = async () => {
  return await axios.get(
    `/api/fan/getAllMeters?id=${localStorage.getItem('id')}`
  );
};

export const addDevice = async (data) => {
  return await axios.post(
    `/api/fan/addMeterdetails?id=${localStorage.getItem('id')}`,
    data
  );
};

export const updateDevice = async (id, data) => {
  return await axios.post(`/api/fan/updateMeter?id=${id}`, data);
};

export const deleteDevice = async (id) => {
  return await axios.get(`/api/fan/deleteMeter?id=${id}`);
};

export const updateDeviceActiveStatus = async (id, data) => {
  return await axios.post(
    `/api/fan/updateMeterActiveStatus/?id=${id}
  `,
    data
  );
};

export const updateDeviceStartStatus = async (id, status) => {
  return await axios.get(
    `/api/fan/updateMeterStartStatus/?id=${id}&status=${status}&?user=${localStorage.getItem(
      'id'
    )}
  `
  );
};

// fans
export const findAllFans = async () => {
  return await axios.get(
    `/api/fan/getAllFans?id=${localStorage.getItem('id')}`
  );
};

export const findFanById = async (id) => {
  return await axios.get(`/api/fan/getFanById?id=${id}`);
};

export const addFan = async (data) => {
  return await axios.post(
    `/api/fan/addFandetails?id=${localStorage.getItem('id')}`,
    data
  );
};

export const updateFan = async (id, data) => {
  return await axios.post(`/api/fan/updateFandetails?id=${id}`, data);
};

export const deleteFan = async (id) => {
  return await axios.delete(`/api/fan/deleteFandetails?id=${id}`);
};

export const updateFanActiveStatus = async (id) => {
  return await axios.post(`/api/fan/updateFanActiveStatus/?id=${id}`);
};

export const updateFanStartStatus = async (id, status) => {
  return await axios.get(
    `/api/fan/updateFanStartStatus/?id=${id}&status=${status}&?user=${localStorage.getItem(
      'id'
    )}
  `
  );
};

// lights
export const findAllLights = async () => {
  return await axios.get(
    `/api/fan/getAllLight?id=${localStorage.getItem('id')}`
  );
};

export const findLightById = async (id) => {
  return await axios.get(`/api/fan/getLightById?id=${id}`);
};

export const addLight = async (data) => {
  return await axios.post(
    `/api/fan/addLightdetails?id=${localStorage.getItem('id')}`,
    data
  );
};

export const updateLight = async (id, data) => {
  return await axios.post(`/api/fan/updateLight?id=${id}`, data);
};

export const deleteLight = async (id) => {
  console.log('delete light id:', id);
  return await axios.delete(`/api/fan/deleteLight?id=${id}`);
};

export const updateLightActiveStatus = async (id) => {
  return await axios.post(`/api/fan/updateLightActiveStatus/?id=${id}`);
};

export const updateLightStartStatus = async (id, status) => {
  return await axios.get(
    `/api/fan/updateLightStartStatus/?id=${id}&status=${status}&?user=${localStorage.getItem(
      'id'
    )}
  `
  );
};

// services
export const getAllService = async () => {
  return await axios.get('/api/fan/getAllService');
};

export const addService = async (data) => {
  return await axios.post('/api/fan/addService', data);
};

export const updateService = async (id) => {
  return await axios.post(`/api/fan/updateService?id=${id}`);
};
