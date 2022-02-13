const role = 'host';
const role2 = 'developer';
const person = 'Jeff';
const person2 = 'James';

// const team = {};
// team[role] = person;
// team[role2] = person2;

const team = {
  [role]: person,
  [role2]: person2,
  [3 + 6 + 9]: 18,
};

// function addProp(obj, key, val) {
//   const copy = { ...obj };
//   copy[key] = val;
//   return copy;
// }

// const addProp = (obj, key, val) => {
//   return {
//     ...obj,
//     [key]: val,
//   };
// };

const addProp = (obj, key, val) => ({
  ...obj,
  [key]: val,
});

const res = addProp(team, 'happy', ':-)');
