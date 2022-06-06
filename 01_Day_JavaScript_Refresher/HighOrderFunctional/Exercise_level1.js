const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)'],
};

const getPersonInfo = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}) => {
  return `${firstName} ${lastName} lives in ${country}. He is  ${age} years old. He is an ${job}. He teaches ${skills}. He speaks ${languages.slice(
    0,
    languages.length - 1
  )} and a little bit of ${languages[languages.length - 1]}`;
};

console.log(getPersonInfo(person));

/*
! Using prototype:
! (UNDER THE HOOD)
----------------------------------------------------------------------
TODO: forEach -> f(callback) -> for -> callback(this[i], i, this)

TODO: map -> f(callback) -> newArray -> for -> newArray.push(callback(this[i], i, this)) -> return newArray

TODO: find -> f(callback) -> field -> for -> found = callback(this[i],  i, this) -> if(found) -> field = this[i] break -> return field

TODO: filter //!(like find instead break on the first match we return newArray, push everything that match if(found))

TODO: reduce -> f(callback, initialValue) -> for -> initialValue = callback(this[i], i, this) -> return initialValue
*/

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

products.forEach((item) => console.log(item.price));

products.forEach((item) =>
  console.log(`
The price of ${item.product} is ${item.price} euros.`)
);

let sum = 0;
products.forEach((item) => {
  if (typeof item.price == 'number') {
    sum += item.price;
  }
});
console.log(sum);

let newArray = products.map((item) => item.price);
console.log(newArray);

let filtered = products.filter((item) => typeof item.price == 'number');
console.log(filtered);

console.log(filtered.reduce((acc, input) => acc + input.price, 0));

console.log(products.find((item) => typeof item.price != 'number'));

console.log(products.findIndex((item) => typeof item.price != 'number'));

console.log(products.some((item) => typeof item.price != 'number'));

console.log(products.every((item) => typeof item.price == 'number'));

/*
* forEach just iterating the callback respect to array length.

* map not just iterating the callback but create newArray from it.

* filter iterate the item and make newArray contain all item that satisfied predicate.

* reduce iterate and applying some callback and accumulating it.

* filter(Contain all item that satisfied predicate), find(return the first item satisfied predicate), findIndex(instead of returning the item it returning the index)

* some(like OR ||), every(like AND &&)
*/
