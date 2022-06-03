const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]


const empty = [];

const element5 = [1, 2, 3, 4, 5];

console.log(element5.length)

console.log(element5[0]);
console.log(element5[(element5.length - 1) / 2]);
console.log(element5[element5.length - 1]);

const mixedDataTypes = [
  1,
  "String",
  null,
  {
    "dict": "something"
  },
  3.54,
  true,
  ["list", "lagi"],
];

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[(itCompanies.length - 1) / 2]);
console.log(itCompanies[itCompanies.length-1]);
itCompanies.map(item => console.log(item));

itCompanies.map(item => itCompanies[itCompanies.indexOf(item)] = item.toUpperCase());
console.log(itCompanies);

itCompanies.includes("FACEBOOK") ? console.log("yes") : console.log("no");

console.log(itCompanies[0].match(/o{2,}/gi))

filtered = itCompanies.filter(item => item.match(/o{2,}/gi) == null);

itCompanies
filtered

itCompanies.sort();

itCompanies

itCompanies.reverse();

itCompanies

const sliceFirst = itCompanies.slice(0,3);

sliceFirst

const sliceLast = itCompanies.slice(itCompanies.length-3,);

sliceLast

itCompanies
itCompanies.shift();  //First Delete
itCompanies
itCompanies.splice((itCompanies.length-1)/2,1); //Middle Delete
itCompanies
itCompanies.pop(); //Last Delete
itCompanies
itCompanies.splice(0,); //Delete All
itCompanies
