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

const usuario = new Person('Lerineide:', 'Revendedora');
usuario.print();

