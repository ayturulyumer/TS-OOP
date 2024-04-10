class Animal {
  eat(): void {
    console.log("eating...");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("barking...");
  }
}

class Cat extends Animal {
  meow(): void {
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
