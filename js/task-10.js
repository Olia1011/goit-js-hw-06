import users from './users.js';
('use strict');

const getSortedUniqueSkills = users =>
users
  .reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills;
  }, [])
  .reduce((sortedSkills, skill) => {
    sortedSkills.some(el => skill === el) || sortedSkills.push(skill);
    return sortedSkills;
  }, [])
  .sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
  