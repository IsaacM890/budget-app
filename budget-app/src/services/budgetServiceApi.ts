import axios from 'axios';
import { baseURL, userEndPoints } from './urls';

class BudgetServiceApi {
  axiosInstance = axios.create({
    baseURL,
  });

  createUser = async (params: string) => {
    try {
      await this.axiosInstance.post(`${userEndPoints.create}/${params}`);
      return { msg: 'User Created successfully', data: params };
    } catch (err) {
      return err.message;
    }
  };

  getUser = async (id: string) => {
    try {
      const user = await this.axiosInstance.get(`${userEndPoints.basic}:${id}`);
      return { msg: 'get User successfully', data: user };
    } catch (err) {
      return err.message;
    }
  };

  updateUser = async (id: string, params: string) => {
    try {
      await this.axiosInstance.put(`${userEndPoints.basic}:${id}/${params}`);
      return { msg: 'User Updated successfully', data: params };
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
}

//   deleteUser: (id: string) => axios.delete(`${baseURL + userEndPoints.basic}:${id}`),

// export const transactionAPIS = {
//   createTransaction: (params: string) => axios.post(`${baseURL + transactionEndPoints.basic}${params}`),
//   getAllTransactions: axios.get(`${baseURL + transactionEndPoints.all}`),
//   updateTransaction: (id: string, params: string) =>
//     axios.put(`${baseURL + transactionEndPoints.basic}:${id}/${params}`),
//   deleteTransaction: (id: string) => axios.delete(`${baseURL + transactionEndPoints.basic}:${id}`),
// };

export default BudgetServiceApi;
