const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//1
const description = Object.entries(users);

description;
const highestSkillNumber = description.map(
  ([key, value]) => value.skills.length
);
console.log(highestSkillNumber);

const highIndex = highestSkillNumber.indexOf(
  highestSkillNumber.slice(0).sort()[highestSkillNumber.length - 1]
);
console.log(highIndex);

const highSkillPeople = description[highIndex][0];
console.log(highSkillPeople);

//2
const countLogIn = description
  .map(([key, value]) => {
    return value.isLoggedIn;
  })
  .filter((boolean) => boolean == true).length;
console.log(countLogIn);

const greaterScore50 = description
  .map(([key, value]) => {
    return value.points;
  })
  .filter((points) => points >= 50).length;
console.log(greaterScore50);

//3
const MERN = ['MongoDB', 'Express', 'React', 'Node'];

const mernCheck = description
  .map(([key, value]) => {
    return MERN.every((mern) => {
      return value.skills.includes(mern);
    })
      ? key
      : null;
  })
  .filter((item) => item != null);
console.log(mernCheck);

//4
let updateUsers = Object.assign({}, { Alexander: users.Alex, ...users });
delete updateUsers.Alex;
console.log(updateUsers);

//5
let key = Object.keys(users);
console.log(key);

//6
let value = Object.values(users);
console.log(value);

//7 "Can't find countries object"
