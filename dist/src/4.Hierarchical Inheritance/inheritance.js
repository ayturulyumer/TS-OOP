"use strict";
class Animal {
    eat() {
        console.log("eating...");
    }
}
class Dog extends Animal {
    bark() {
        console.log("barking...");
    }
}
class Cat extends Animal {
    meow() {
        console.log("meowing...");
    }
}
const animal = new Animal();
const dog = new Dog();
const cat = new Cat();
animal.eat();
dog.bark();
dog.eat();
cat.meow();
cat.eat();
//# sourceMappingURL=inheritance.js.map