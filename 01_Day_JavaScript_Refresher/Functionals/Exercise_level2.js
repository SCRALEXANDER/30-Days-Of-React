const solveQuadEquation = (a, b, c) => {
  let answer = [];
  answer.push((-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a));
  answer.push((-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a));
  return answer;
};

console.log(solveQuadEquation(1, -1, -2));

const printArray = (array) => array.forEach((i) => console.log(i));
printArray([2, 6, 4]);

const showDateTime = () => new Date(Date.now()).toLocaleString();
console.log(showDateTime());

const swapValue = (x, y) => {
  let temp = x;
  x = y;
  y = temp;
  return `x = ${x} y = ${y}`;
};
console.log(swapValue(4, 5));

const reverseArray = (array) => array.reverse();
console.log(reverseArray([1, 2, 3, 4, 5]));

const capitalizeArray = (array) => {
  let upperChar = [];
  array.forEach((currentItem) => {
    upperChar.push(currentItem.toUpperCase());
  });
  return upperChar;
};
console.log(capitalizeArray(['s', 'o', 'm', 'e']));

const addItem = (item) => [item];
console.log(addItem('something'));

const removeItem = (index, array) => {
  array.splice(index, 1);
  return array;
};
console.log(removeItem(2, ['s', 'o', 'm', 'e']));

const evensAndOdds = (num) =>
  num % 2 == 0
    ? `The number of evens are ${num}`
    : `The number of odds are ${num}`;
console.log(evensAndOdds(2));

const sum = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4));

const userIdGenerator = () => {
  return Math.random().toString(36).slice(2, 9);
};
console.log(userIdGenerator());
console.log(userIdGenerator());
