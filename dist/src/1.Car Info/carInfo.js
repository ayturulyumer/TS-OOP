"use strict";
class Car {
    constructor(b, m, hp) {
        this.brand = b;
        this.model = m;
        this.hp = hp;
    }
    getBrand() {
        return this.brand;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    getModel() {
        return this.model;
    }
    setModel(model) {
        this.model = model;
    }
    getHp() {
        return this.hp;
    }
    setHp(hp) {
        this.hp = hp;
    }
}
function testCarInfo(carData) {
    const [brand, model, hpString] = carData.split(" ");
    const car = new Car(brand, model, parseInt(hpString));
    console.log(`The car is: ${car.brand} ${car.model} – ${car.hp} HP.`);
}
const carInput = "Chevrolet Impala 390";
const carInput2 = "Skoda Karoq 150";
testCarInfo(carInput);
testCarInfo(carInput2);
//# sourceMappingURL=carInfo.js.map