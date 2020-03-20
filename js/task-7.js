import users from './users.js';
('use strict');

const calculateTotalBalance = users => users.reduce((totalbalance, user) => totalbalance + user.balance, 0);
  
  console.log(calculateTotalBalance(users)); // 20916