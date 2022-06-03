const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya"
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
  "Scss"
];

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(ages);
console.log(ages[0]); //min
console.log(ages[ages.length - 1]); //max
console.log(ages[Math.floor(ages.length / 2)]); //median
console.log(ages.reduce((a, b) => a + b, 0) / ages.length); //average

console.log(countries.slice(0, 10));

console.log(countries[Math.floor(countries.length / 2)]); //middle

if (countries.length % 2 == 0) {
  let splitCountry = countries.splice(Math.floor(countries.length / 2));
  console.log(splitCountry);
} else {
  let splitCountry = countries.splice(Math.floor(countries.length / 2));
  let anotherSplit = splitCountry.splice(0, splitCountry.length / 2);
  console.log(splitCountry);
  console.log(anotherSplit);
  console.log(countries);
}
