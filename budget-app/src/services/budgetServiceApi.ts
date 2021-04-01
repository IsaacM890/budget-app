export {}; // import axios from 'axios';
// import { baseURL, userEndPoints, transactionEndPoints } from './urls';

// export default class BudgetServiceApi{
//   init:any

//   constructor(param:string){
//     this.init=param
//   }

//   axiosInstance = axios.create({
//   baseURL,
//   });

// }

//   const createUser= async (params: string) =>{ try {
//     await this.axiosInstance.post(`${userEndPoints.create}${params}`)
//   } catch (error) {
//     return error.message}
//   } ;

//   const getUser = async (id: string) => this.axiosInstance.get(`${baseURL + userEndPoints.basic}:${id}`),
//   updateUser: (id: string, params: string) => axios.put(`${baseURL + userEndPoints.basic}:${id}/${params}`),
//   deleteUser: (id: string) => axios.delete(`${baseURL + userEndPoints.basic}:${id}`),

// export const transactionAPIS = {
//   createTransaction: (params: string) => axios.post(`${baseURL + transactionEndPoints.basic}${params}`),
//   getAllTransactions: axios.get(`${baseURL + transactionEndPoints.all}`),
//   updateTransaction: (id: string, params: string) =>
//     axios.put(`${baseURL + transactionEndPoints.basic}:${id}/${params}`),
//   deleteTransaction: (id: string) => axios.delete(`${baseURL + transactionEndPoints.basic}:${id}`),
// };
