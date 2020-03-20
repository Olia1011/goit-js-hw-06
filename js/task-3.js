import users from './users.js';
('use strict');

const getUsersWithGender = (users, gender) =>  users.filter(user => user.gender === gender);
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]