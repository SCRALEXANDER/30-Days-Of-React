const userIdGeneratedByUser = (length, howMuch, base = 36) => {
  return [...Array(howMuch)]
    .map(() =>
      Math.random()
        .toString(base)
        .substring(2, length + 2)
    )
    .join('\n');
};
console.log(userIdGeneratedByUser(5, 5));

//for rand Range
const randomRange = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const generateColors = (type, howMuch) => {
  switch (true) {
    case type.toLowerCase() == 'hexa':
      return userIdGeneratedByUser(6, howMuch, 16)
        .split('\n')
        .map((i) => `#${i}`);
    case type.toLowerCase() == 'rgb':
      return [...Array(howMuch)].map(
        () =>
          `rgb(${randomRange(0, 180)}, ${randomRange(0, 180)}, ${randomRange(
            0,
            180
          )})`
      );
  }
};
console.log(generateColors('hexa', 3));
console.log(generateColors('rgb', 3));

const shuffleArray = (array) => {
  return array.sort(() => 0.5 - Math.random());
};
console.log(shuffleArray(['s', 'o', 'm', 'e']));
console.log(shuffleArray(['s', 'o', 'm', 'e']));
console.log(shuffleArray(['s', 'o', 'm', 'e']));

const factorial = (n) => {
  if (n == 1) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));
console.log(factorial(7));

const isEmpty = (item) => {
  if (typeof item == 'object' && !Array.isArray(item))
    return Object.keys(item) == 0;
  return item.length == 0;
};
console.log(isEmpty([]));
console.log(isEmpty({}));
console.log(isEmpty(''));

const average = (array) => {
  return array.reduce((a, b) => a + b, 0) / array.length;
};
console.log(average([20, 40, 60, 80, 100]));
