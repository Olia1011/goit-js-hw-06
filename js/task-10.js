import users from './users.js';
('use strict');

const getSortedUniqueSkills = users =>
users
  .reduce((accum, user) => {
    accum.push(...user.skills);
    return accum;
  }, [])
  .sort();

  console.log(getSortedUniqueSkills(users));
  // // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
    


// const getSortedUniqueSkills = users =>
// users
//   .reduce((userSkills, user) => {
//     userSkills.push(...user.skills);
//     return userSkills;
//   }, [])
//   .reduce((sortedSkills, skill) => {
//     sortedSkills.some(item => skill === item) || sortedSkills.push(skill);
//     return sortedSkills;
//   }, [])
//   .sort();

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
  