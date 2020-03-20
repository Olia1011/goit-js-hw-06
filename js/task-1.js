import users from './users.js';
('use strict');

const getUserNames = users => users.map(user => user.name);
  
console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]