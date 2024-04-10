class Car {
  brand: string;
  model: string;
  hp: number;

  constructor(b: string, m: string, hp: number) {
    this.brand = b;
    this.model = m;
    this.hp = hp;
  }

  getBrand(): string {
    return this.brand;
  }

  setBrand(brand: string): void {
    this.brand = brand;
  }

  getModel(): string {
    return this.model;
  }

  setModel(model: string): void {
    this.model = model;
  }

  getHp(): number {
    return this.hp;
  }

  setHp(hp: number): void {
    this.hp = hp;
  }
}

function testCarInfo(carData: string): void {
  const [brand, model, hpString] = carData.split(" ");
  const car = new Car(brand, model, parseInt(hpString));

  console.log(`The car is: ${car.brand} ${car.model} – ${car.hp} HP.`);
}

const carInput: string = "Chevrolet Impala 390";
const carInput2: string = "Skoda Karoq 150";
testCarInfo(carInput)
testCarInfo(carInput2)
