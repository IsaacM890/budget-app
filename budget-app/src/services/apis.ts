import axios from 'axios';
import { baseURL, userEndPoints, transactionEndPoints } from './urls';

export const userAPIS = {
  createUser: (params: string) => axios.post(`${baseURL + userEndPoints.create}${params}`),
  getUser: (id: string) => axios.get(`${baseURL + userEndPoints.basic}:${id}`),
  updateUser: (id: string, params: string) => axios.put(`${baseURL + userEndPoints.basic}:${id}/${params}`),
  deleteUser: (id: string) => axios.delete(`${baseURL + userEndPoints.basic}:${id}`),
};

export const transactionAPIS = {
  createTransaction: (params: string) => axios.post(`${baseURL + transactionEndPoints.basic}${params}`),
  getAllTransactions: axios.get(`${baseURL + transactionEndPoints.all}`),
  updateTransaction: (id: string, params: string) =>
    axios.put(`${baseURL + transactionEndPoints.basic}:${id}/${params}`),
  deleteTransaction: (id: string) => axios.delete(`${baseURL + transactionEndPoints.basic}:${id}`),
};
