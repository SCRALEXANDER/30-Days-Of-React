const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName('Alex', 'ander'));

const addNumber = (num1, num2) => num1 + num2;
console.log(addNumber(10, 20));

const _areaOfCircle = (radius) => Math.PI * radius * radius;
console.log(_areaOfCircle(7));

const convertCelciusToFahrenheit = (deg) => (deg * 9) / 5 + 32;
console.log(convertCelciusToFahrenheit(34));

const BMI = (weight, height) => {
  let bmi = weight / (height * height);
  console.log(bmi);
  switch (true) {
    case bmi < 18.5:
      return 'Underweight';
      break;
    case bmi < 25:
      return 'Normal Weight';
      break;
    case bmi < 30:
      return 'Overweight';
      break;
    default:
      return 'Obese';
  }
};
console.log(BMI(59, 1.6));

const checkSeason = (month) => {
  switch (true) {
    case month == 'September' || month == 'October' || month == 'November':
      'Autumn';
      break;
    case month == 'December' || month == 'January' || month == 'Febuary':
      'Winter';
      break;
    case month == 'March' || month == 'April' || month == 'May':
      'Spring';
      break;
    case month == 'June' || month == 'July' || month == 'August':
      return 'Summer';
      break;
  }
};

console.log(checkSeason('June'));
