class Person {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }

  print() {
    const { name, job } = this;
    console.log(`${name}, ${job}`);
  }
}

const thatGuy = new Person('Gabriel', 'Engenheiro de Software');
thatGuy.print();
const thatGuy2 = new Person('Gabriel2', 'Engenheiro de Software2');
thatGuy2.print();
const thatGuy3 = new Person('Gabriel3', 'Engenheiro de Software3');
thatGuy3.print();
const thatGuy4 = new Person('Gabriel4', 'Engenheiro de Software4');
thatGuy4.print();
console.log('Hello, World!');
