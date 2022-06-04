let month = 'January';
let monthConvert = month.toLowerCase();

monthConvert == 'febuary'
  ? console.log(
      `${
        monthConvert[0].toUpperCase() + monthConvert.slice(1)
      } has 28 days, or 29 days if it leap year.`
    )
  : console.log(
      `${monthConvert[0].toUpperCase() + monthConvert.slice(1)} has 31 days.`
    );

let year = 2022;
year % 4 == 0 && year % 100 != 0
  ? console.log(`${year} is leap year.`)
  : console.log(`${year} not leap year.`);
