class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  talk() {}
}

//TODO: Exercise_level2.js
class Dog extends Animal {
  talk() {
    console.log('barkk barkk..');
  }
}

const doggo = new Dog('Doggo', 5, 'black', 4);
doggo.talk();

class Cat extends Animal {
  talk() {
    console.log('meoww meowww...');
  }
}

const macan = new Cat('Macan', 2, 'orange', 4);
macan.talk();

//TODO: Exercise_level3.js
const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

class Statistics {
  constructor(array) {
    this.array = array;
  }
  count() {
    return this.array.length;
  }
  sum() {
    return this.array.reduce((acc, initial) => acc + initial, 0);
  }
  min() {
    return this.array.sort()[0];
  }
  max() {
    return this.array.sort()[this.array.length - 1];
  }
  range() {
    return this.max() - this.min();
  }
  mean() {
    return Math.round(this.sum() / this.count());
  }
  median() {
    return this.array[Math.round((this.count() - 1) / 2)];
  }
  mode() {
    let occurance = [];
    this.array.forEach((num, index, array) => {
      let tempIndex = occurance.findIndex((item) => item.mode == num);
      if (tempIndex == -1) {
        occurance.push({ mode: num, count: 1 });
      } else {
        occurance[tempIndex].count++;
      }
    });
    return occurance.sort((a, b) => a.count - b.count)[occurance.length - 1];
  }
  var() {
    const meanData = this.mean();
    let sumSquareDifferenceMean = this.array
      .map((item) => (item - meanData) ** 2)
      .reduce((acc, initial) => acc + initial, 0);
    return sumSquareDifferenceMean / this.count();
  }
  std() {
    return Math.sqrt(this.var()).toPrecision(2);
  }
  freqDist() {
    let occurance = [];
    this.array.forEach((num, index, array) => {
      let tempIndex = occurance.findIndex((item) => item.mode == num);
      if (tempIndex == -1) {
        occurance.push({ mode: num, count: 1 });
      } else {
        occurance[tempIndex].count++;
      }
    });
    //Convert Count to Percent
    const sumCount = occurance.reduce((a, b) => a + b.count, 0);
    let freqDis = occurance.map((item) => {
      return (item.count = ((item.count * 100) / sumCount).toPrecision(2));
    });
    //Formatt The Result
    const result = freqDis.map((percent, index) => {
      return `(${percent}, ${Object.entries(occurance)[index][1].mode})`;
    });
    return result;
  }
  describe() {
    return `Count: ${this.count()}\nSum: ${this.sum()}\nMin: ${this.min()}\nMax: ${this.max()}\nRange: ${this.range()}\nMean: ${this.mean()}\nMedian: ${this.median()}\nMode: (${
      this.mode().mode
    }, ${
      this.mode().count
    })\nVariance: ${this.var()}\nStandard Deviation: ${this.std()}\nFrequency Distribution: ${this.freqDist()}`;
  }
}

const statistics = new Statistics(ages);

console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Range: ', statistics.range());
console.log('Mean: ', statistics.mean());
console.log('Median: ', statistics.median());
console.log('Mode: ', statistics.mode());
console.log('Variance: ', statistics.var());
console.log('Standard Deviation: ', statistics.std());
console.log('Frequency Distribution: ', statistics.freqDist());
console.log(statistics.describe());
