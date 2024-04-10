class Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

function getPersonInfo(personInfo: string): void {
  const [name, age] = personInfo.split(" ");
  const person = new Person(name, parseInt(age));

  console.log(`${person.name} is ${person.age} years old.`);
}

const newPerson: string = "Peter 12";
const newPerson2: string = "Sofia 33";

getPersonInfo(newPerson)
getPersonInfo(newPerson2)
