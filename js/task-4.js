import users from './users.js';
('use strict');

const getInactiveUsers = users => users.filter(user => user.isActive !== true);
  
  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]