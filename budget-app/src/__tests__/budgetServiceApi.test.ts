// /**
//  * @jest-environment node
//  */

// import BudgetServiceApi from '../services/budgetServiceApi';

// describe('testing budget Api', () => {
//   it('check user to have necessary properties', async () => {
//     const user = await BudgetServiceApi.getUser('606b12feba47160009dce5fb');
//     console.log(user);

//     expect(user).toHaveProperty('_id');
//     expect(user).toHaveProperty('first_name');
//     expect(user).toHaveProperty('last_name');
//     expect(user).toHaveProperty('email');
//   });

//   it('Create user successfully', async () => {
//     const newUser = await BudgetServiceApi.createUser({
//       first_name: 'gogo',
//       last_name: 'maharat',
//       email: 'test66694@gmail.com',
//       password: 'lolososo',
//       avatar: 'avatar',
//       current_balance: '20,487',
//       current_balance_currency: 'USD',
//     });

//     console.log(newUser);
//     expect(newUser.msg).toBe('User Created successfully');
//   });

//   it('update user successfully', async () => {
//     const successMsg = await BudgetServiceApi.updateUser('606c3565c0d0a90008e8f6c5', {
//       first_name: 'Almog',
//       last_name: 'maharat',
//       email: 'test555666@gmail.com',
//       password: '$2a$10$k2NM10Yp/EXB99WRIG9CSuaOVXr5kXHxp4o8ATL7JO83tDFo4.C4a',
//       avatar: 'avatar',
//       current_balance: '20,487',
//       current_balance_currency: 'USD',
//     });

//     const user = await BudgetServiceApi.getUser('606c3565c0d0a90008e8f6c5');

//     expect(user._id).toBe('606c3565c0d0a90008e8f6c5');
//     expect(user.first_name).toBe('Almog');
//     expect(successMsg.msg).toBe('User Updated successfully');
//   });

//   it('Delete user successfully', async () => {
//     const successMsg = await BudgetServiceApi.deleteUser('606c3565c0d0a90008e8f6c5');
//     console.log(successMsg);

//     expect(successMsg.msg).toBe('User Deleted successfully');
//   });

//   it('check transactions to have necessary properties', async () => {
//     const transactions = await BudgetServiceApi.getAllTransactions();
//     console.log(transactions);

//     expect(transactions[0]).toHaveProperty('paymentType');
//     expect(transactions[0]).toHaveProperty('paymentMethod');
//     expect(transactions[0]).toHaveProperty('cancelled');
//     expect(transactions[0]).toHaveProperty('time');
//   });
//   it('Create Transaction successfully', async () => {
//     const newTransaction = await BudgetServiceApi.createTransaction({
//       paymentType: 'income',
//       paymentMethod: 'PayPal 2021',
//       cancelled: true,
//       time: '8:09 PM',
//       date: '12/7/2020',
//       currency: 'CNY',
//       category: 'Grocery',
//       company: 'Browsecat',
//       amount: {
//         from: 70,
//         to: 200,
//       },
//       location: {
//         country: 'China',
//         city: 'Lidian',
//         street: '9412 Northview Avenue',
//         lat: 32.272766,
//         lng: 119.579153,
//       },
//     });

//     console.log(newTransaction);
//     expect(newTransaction.msg).toBe('Transaction Created successfully');
//   });
//   it('update Transaction successfully', async () => {
//     const successMsg = await BudgetServiceApi.updateTransaction('606c379bc0d0a90008e8f6c9', {
//       paymentType: 'Expenses',
//       paymentMethod: 'paypal 220',
//       cancelled: true,
//       time: '8:09 PM',
//       date: '12/7/2020',
//       currency: 'CNY',
//       category: 'Grocery',
//       company: 'Browsecat',
//       amount: {
//         from: 70,
//         to: 200,
//       },
//       location: {
//         country: 'China',
//         city: 'Lidian',
//         street: '9412 Northview Avenue',
//         lat: 32.272766,
//         lng: 119.57915,
//       },
//     });

//     console.log(successMsg);
//     expect(successMsg.msg).toBe('Transaction Updated successfully');
//   });

//   it('Delete Transaction successfully', async () => {
//     const successMsg = await BudgetServiceApi.deleteTransaction('606c379bc0d0a90008e8f6c9');
//     console.log(successMsg);

//     expect(successMsg.msg).toBe('Transaction Deleted successfully');
//   });
// });
