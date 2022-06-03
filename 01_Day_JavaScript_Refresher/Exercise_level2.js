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
  "MongoDB"
];

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let words = text.split(" ");
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat"); //add at the beginning
shoppingCart.push("Sugar");
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";

shoppingCart;

let check = "Ethiopia";
countries.indexOf(check) != -1
  ? console.log(check.toUpperCase())
  : countries.push(check);

check = "Scss";
if (webTechs.indexOf(check) != -1) {
  console.log(`${check} is a CSS preprocess`);
} else {
  webTechs.push(check);
  console.log(webTechs);
}

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
