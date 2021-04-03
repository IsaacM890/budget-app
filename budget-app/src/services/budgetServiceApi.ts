import axios from 'axios';
import { baseURL, userEndPoints, transactionEndPoints } from './urls';

class BudgetServiceApi {
  axiosInstance = axios.create({
    baseURL,
  });

  createUser = async (params: string) => {
    try {
      await this.axiosInstance.post(`${userEndPoints.create}`, params);
      return { msg: 'User Created successfully', data: params };
    } catch (err) {
      return err.message;
    }
  };

  getUser = async (id: string) => {
    try {
      const user = await this.axiosInstance.get(`${userEndPoints.basic}:${id}`);
      return { msg: 'GET req successfully', data: user };
    } catch (err) {
      return err.message;
    }
  };

  updateUser = async (id: string) => {
    try {
      await this.axiosInstance.put(`${userEndPoints.basic}:${id}`);
      return { msg: 'User Updated successfully' };
    } catch (err) {
      return err.message;
    }
  };

  deleteUser = async (id: string) => {
    try {
      await this.axiosInstance.delete(`${userEndPoints.basic}:${id}`);
      return { msg: 'User Deleted successfully' };
    } catch (err) {
      return err.message;
    }
  };

  createTransaction = async (params: string) => {
    try {
      await this.axiosInstance.post(`${transactionEndPoints.basic}`, params);
      return { msg: 'Transaction Created successfully', data: params };
    } catch (err) {
      return err.message;
    }
  };

  getAllTransactions = async () => {
    try {
      const transactions = await this.axiosInstance.get(`${transactionEndPoints.all}`);
      return { msg: 'GET req successfully', data: transactions };
    } catch (err) {
      return err.message;
    }
  };

  updateTransaction = async (id: string) => {
    try {
      await this.axiosInstance.put(`${transactionEndPoints.basic}:${id}`);
      return { msg: 'Transaction Updated successfully' };
    } catch (err) {
      return err.message;
    }
  };

  deleteTransaction = async (id: string) => {
    try {
      await this.axiosInstance.delete(`${transactionEndPoints.basic}:${id}`);
      return { msg: 'Transaction Deleted successfully' };
    } catch (err) {
      return err.message;
    }
  };
}

export default BudgetServiceApi;
