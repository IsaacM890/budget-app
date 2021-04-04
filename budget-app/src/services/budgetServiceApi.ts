import axios from 'axios';
import { baseURL, userEndPoints, transactionEndPoints } from './urls';

interface IUserProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
  currentBalance: string;
  currentBalanceCurrency: string;
}

interface ITransactionProps {
  paymentType: string;
  paymentMethod: string;
  cancelled: boolean;
  time: string;
  date: string;
  currency: string;
  category: string;
  company: string;
  amount: {
    from: Number;
    to: Number;
  };
  location: {
    country: string;
    city: string;
    lat: string;
    lng: string;
  };
}

class BudgetServiceApi {
  axiosInstance = axios.create({
    baseURL,
  });

  createUser = async (userPayload: IUserProps) => {
    try {
      await this.axiosInstance.post(`${userEndPoints.Create}`, userPayload);
      return { msg: 'User Created successfully' };
    } catch (err) {
      return err.message;
    }
  };

  getUser = async (id: string) => {
    try {
      const user = await this.axiosInstance.get(`${userEndPoints.Base}:${id}`);
      return { msg: 'GET req successfully', data: user };
    } catch (err) {
      return err.message;
    }
  };

  updateUser = async (id: string) => {
    try {
      await this.axiosInstance.put(`${userEndPoints.Base}:${id}`);
      return { msg: 'User Updated successfully' };
    } catch (err) {
      return err.message;
    }
  };

  deleteUser = async (id: string) => {
    try {
      await this.axiosInstance.delete(`${userEndPoints.Base}:${id}`);
      return { msg: 'User Deleted successfully' };
    } catch (err) {
      return err.message;
    }
  };

  createTransaction = async (transactionPayload: ITransactionProps) => {
    try {
      await this.axiosInstance.post(`${transactionEndPoints.Base}`, transactionPayload);
      return { msg: 'Transaction Created successfully' };
    } catch (err) {
      return err.message;
    }
  };

  getAllTransactions = async () => {
    try {
      const transactions = await this.axiosInstance.get(`${transactionEndPoints.All}`);
      return { msg: 'GET req successfully', data: transactions };
    } catch (err) {
      return err.message;
    }
  };

  updateTransaction = async (id: string) => {
    try {
      await this.axiosInstance.put(`${transactionEndPoints.Base}:${id}`);
      return { msg: 'Transaction Updated successfully' };
    } catch (err) {
      return err.message;
    }
  };

  deleteTransaction = async (id: string) => {
    try {
      await this.axiosInstance.delete(`${transactionEndPoints.Base}:${id}`);
      return { msg: 'Transaction Deleted successfully' };
    } catch (err) {
      return err.message;
    }
  };
}

export default BudgetServiceApi;
