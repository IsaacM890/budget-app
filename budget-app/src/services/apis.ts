import axios from 'axios';
import { baseURL, userEndPoints } from './urls';

const userAPIS = {
  createUser: (params: string) => axios.post(`${baseURL + userEndPoints.create}${params}`),
  getUser: (id: string) => axios.get(`${baseURL + userEndPoints.basic}:${id}`),
  updateUser: (id: string, params: string) => axios.put(`${baseURL + userEndPoints.basic}:${id}${params}`),
  deleteUser: (id: string) => axios.delete(`${baseURL + userEndPoints.basic}:${id}`),
};

export default userAPIS;
