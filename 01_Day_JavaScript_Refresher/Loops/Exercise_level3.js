//1
const personAccount = {
  firstName: 'Udin',
  lastName: 'Marlong',
  incomes: [23, 36, 32, 77, 45, 86, 23, 66],
  expenses: [45, 12, 7, 31, 2, 13, 9, 21],
  totalIncomes: function () {
    return this.incomes.reduce((a, b) => a + b, 0);
  },
  totalExpenses: function () {
    return this.expenses.reduce((a, b) => a + b, 0);
  },
  addIncomes: function (a) {
    this.incomes.push(a);
  },
  addExpenses: function (a) {
    this.expenses.push(a);
  },
  accountBalance: function () {
    return this.totalIncomes() - this.totalExpenses();
  },
  accountInfo: function () {
    return `${this.firstName} ${
      this.lastName
    } have $${this.totalIncomes()} incomes and $${this.totalExpenses()} expenses this month.\nAccount Balace this month: $${this.accountBalance()}`;
  },
};
console.log(personAccount.totalIncomes());
console.log(personAccount.totalExpenses());
console.log(personAccount.accountBalance());
console.log(personAccount.accountInfo());

const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
];

//2a
const signUp = function () {
  while (true) {
    let name = 'Udin'; //prompt
    if (users.some((obj) => obj.username == name)) {
      console.log('Already used username!');
      continue;
    } else {
      users.push({ username: name });
      break;
    }
  }
  while (true) {
    let email = 'udin@gmail.com'; //prompt
    if (users.some((obj) => obj.email == email)) {
      console.log('Already used email!');
      continue;
    } else {
      users[users.length - 1].email = email;
      break;
    }
  }
  while (true) {
    let password = 'marlong123'; //prompt
    if (users.some((obj) => obj.password == password)) {
      console.log('Already used password!');
      continue;
    } else {
      users[users.length - 1].password = password;
      break;
    }
  }
  users[users.length - 1].createdAt = `${new Date(
    Date.now()
  ).toLocaleDateString()} ${new Date(Date.now())
    .toLocaleTimeString()
    .toUpperCase()}`;
  users[users.length - 1].isLoggedIn = false;
};

signUp();

// 2b
const signIn = function () {
  let name = 'Udin'; //prompt
  let password = 'marlong123'; //prompt
  let verified = false;
  for (const obj of users) {
    if (obj.username == name && obj.password == password) {
      obj.isLoggedIn = true;
      verified = true;
      return obj;
    }
  }
  if (verified == false) {
    console.log('Wrong Username or Password!');
  }
};

//3a
const rateProduct = function () {
  let user = signIn();
  if (user.isLoggedIn != true) {
    return;
  }
  products.forEach((item, i) => {
    console.log(`${item.description} (Price: $${item.price})\n`);
    let rating = 5; //prompt
    item.ratings.push({ userId: user.username, rate: rating });
  });
};

rateProduct();

//3b
const averageRating = function () {
  let user = signIn();
  if (user.isLoggedIn != true) {
    return;
  }

  products.forEach((obj) => {
    let average =
      obj.ratings.reduce((a, obj) => a + obj.rate, 0) / obj.ratings.length;
    console.log(`${obj.description} (Rating: ${average.toPrecision(3)})`);
  });
};

averageRating();

const likeProduct = function () {
  let user = signIn();
  if (user.isLoggedIn != true) {
    return;
  }
  products.forEach((obj) => {
    console.log(`Do you like ${obj.description}`);
    let like = true; //prompt
    if (like) {
      obj.likes.push(user.username);
      console.log(`${user.username} like ${obj.description}`);
    }
  });
};

likeProduct();
