const dog = {
  name: 'Barky',
  legs: 4,
  color: 'brown',
  age: 5,
  bark: () => {
    return 'woof woof';
  },
  breed: 'Hutsky',
  getDogInfo: function () {
    return `${this.name} ${this.age} years old were ${this.breed} had ${this.legs} legs and ${this.color} color.`;
  },
};

console.log(dog);

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

console.log(dog.getDogInfo());
