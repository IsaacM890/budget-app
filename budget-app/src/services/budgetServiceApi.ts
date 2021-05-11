import axios from 'axios';
import { IUser, ITransaction } from '../models/index';

const baseURL = process.env.REACT_APP_API_URL;

class BudgetServiceApi {
  axiosInstance = axios.create({
    baseURL,
  });

  getCurrency = async (currencyCode: string) => {
    try {
      const currencies = await axios.get(
        ` https://v6.exchangerate-api.com/v6/6eec34279d4900b11c746caf/latest/${currencyCode}`
      );
      return currencies.data;
    } catch (err) {
      console.error('An error has occurred : ', err.message);
      throw new Error(err);
    }
  };

  createUser = async (userPayload: IUser) => {
    try {
      await this.axiosInstance.post(`users/register/`, userPayload);
      return { msg: 'User Created successfully' };
    } catch (err) {
      console.error('An error has occurred : ', err.message);
      throw new Error(err);
    }
  };

  getUser = async (id: string) => {
    try {
      const user = await this.axiosInstance.get(`users/${id}`);
      return user.data;
    } catch (err) {
      console.error('An error has occurred : ', err.message);
      throw new Error(err);
    }
  };

  updateUser = async (id: string, userPayload: IUser) => {
    try {
      await this.axiosInstance.put(`users/${id}`, userPayload);
      return { msg: 'User Updated successfully' };
    } catch (err) {
      console.error('An error has occurred : ', err.message);
      throw new Error(err);
    }
  };

  deleteUser = async (id: string) => {
    try {
      await this.axiosInstance.delete(`users/${id}`);
      return { msg: 'User Deleted successfully' };
    } catch (err) {
      console.error('An error has occurred : ', err.message);
      throw new Error(err);
    }
  };

  getAllTransactions = async () => {
    try {
      const transactions = await this.axiosInstance.get(`transactions/all`);
      return transactions.data;
    } catch (err) {
      console.error('An error has occurred : ', err.message);
      throw new Error(err);
    }
  };

  getLatestTransactionsByLimit = async (limit: number) => {
    try {
      const transactions = await this.axiosInstance.get(`transactions/latest?limit=${limit}`);
      return transactions.data;
    } catch (err) {
      console.error('An error has occurred : ', err.message);
      throw new Error(err);
    }
  };

  updateTransaction = async (id: string, transactionPayload: ITransaction) => {
    try {
      await this.axiosInstance.put(`transactions/${id}`, transactionPayload);
      return { msg: 'Transaction Updated successfully' };
    } catch (err) {
      console.error('An error has occurred : ', err.message);
      throw new Error(err);
    }
  };

  deleteTransaction = async (id: string) => {
    try {
      await this.axiosInstance.delete(`transactions/${id}`);
      return { msg: 'Transaction Deleted successfully' };
    } catch (err) {
      console.error('An error has occurred : ', err.message);
      throw new Error(err);
    }
  };

  createTransaction = async (transactionPayload: ITransaction) => {
    try {
      await this.axiosInstance.post(`transactions/`, transactionPayload);
      return { msg: 'Transaction Created successfully' };
    } catch (err) {
      console.error('An error has occurred : ', err.message);
      throw new Error(err);
    }
  };
}

export default new BudgetServiceApi();
