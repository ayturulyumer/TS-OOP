"use strict";
class Person {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
function getPersonInfo(personInfo) {
    const [name, age] = personInfo.split(" ");
    const person = new Person(name, parseInt(age));
    console.log(`${person.name} is ${person.age} years old.`);
}
const newPerson = "Peter 12";
const newPerson2 = "Sofia 33";
getPersonInfo(newPerson);
getPersonInfo(newPerson2);
//# sourceMappingURL=opinionPoll.js.map