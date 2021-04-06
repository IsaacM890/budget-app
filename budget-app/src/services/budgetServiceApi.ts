import axios from 'axios';

const baseURL = process.env.BASE_URL;

interface IUserProps {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  avatar: string;
  current_balance: string;
  current_balance_currency: string;
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
    street:string,
    lat: number;
    lng: number;
  };
}

class BudgetServiceApi {
  axiosInstance = axios.create({
    baseURL,
  });

  createUser = async (userPayload: IUserProps) => {
    try {
      await this.axiosInstance.post(`users/register/`, userPayload);
      return { msg: 'User Created successfully' };
    } catch (err) {
      return err.message;
    }
  };

  getUser = async (id: string) => {
    try {
      const user = await this.axiosInstance.get(`users/${id}`);
      return user.data ;
    } catch (err) {
      return err.message;
    }
  };

  updateUser = async (id: string,userPayload: IUserProps) => {
    try {
      await this.axiosInstance.put(`users/${id}`, userPayload);
      return { msg: 'User Updated successfully' };
    } catch (err) {
      return err.message;
    }
  };

  deleteUser = async (id: string) => {
    try {
      await this.axiosInstance.delete(`users/${id}`);
      return { msg: 'User Deleted successfully' };
    } catch (err) {
      return err.message;
    }
  };

  getAllTransactions = async () => {
    try {
      const transactions = await this.axiosInstance.get(`transactions/all/`);
      return transactions.data ;
    } catch (err) {
      return err.message;
    }
  };

  updateTransaction = async (id: string, transactionPayload: ITransactionProps) => {
    try {
      await this.axiosInstance.put(`transactions/${id}`,transactionPayload);
      return { msg: 'Transaction Updated successfully' };
    } catch (err) {
      return err.message;
    }
  };

  deleteTransaction = async (id: string) => {
    try {
      await this.axiosInstance.delete(`transactions/${id}`);
      return { msg: 'Transaction Deleted successfully' };
    } catch (err) {
      return err.message;
    }
  };

  createTransaction = async (transactionPayload: ITransactionProps) => {
    try {
      await this.axiosInstance.post(`transactions/`, transactionPayload);
      return { msg: 'Transaction Created successfully' };
    } catch (err) {
      return err.message;
    }
  };

}

export default new BudgetServiceApi();
