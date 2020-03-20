import users from './users.js';
('use strict');

const getNamesSortedByFriendsCount = users => {
    const sortedByFriendsCount = (a,b) => a.friends.length - b.friends.length;
    return users.sort(sortedByFriendsCount);
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


