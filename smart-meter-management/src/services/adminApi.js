import axios from 'axios';

export const getAllUsers = async () => {
  return await axios.get(`/api/auth/getAllUser`);
};

export const updateUser = async (id, data) => {
  return await axios.get(`/api/auth/updateUser?id=${id}`, data);
};

export const deleteUser = async (id) => {
  return await axios.delete(`/api/auth/deleteUser?id=${id}`);
};

export const addUser = async (data) => {
  return await axios.post(`/api/auth/addUser`, data);
};
