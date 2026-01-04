import Car from "./10-car.js";

class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
console.log("Original TestCar:");
console.log(tc1);

const tc2 = tc1.cloneCar();
console.log("\nCloned TestCar:");
console.log(tc2);

console.log("\nAre they the same object?", tc1 === tc2);
console.log("tc1 instanceof Car?", tc1 instanceof Car);
console.log("tc1 instanceof TestCar?", tc1 instanceof TestCar);
console.log("tc2 instanceof Car?", tc2 instanceof Car);
console.log("tc2 instanceof TestCar?", tc2 instanceof TestCar);

const c1 = new Car("Toyota", "V6", "Red");
console.log("\nOriginal Car:");
console.log(c1);

const c2 = c1.cloneCar();
console.log("\nCloned Car:");
console.log(c2);

console.log("\nAre they the same object?", c1 === c2);
console.log("c1 instanceof Car?", c1 instanceof Car);
console.log("c2 instanceof Car?", c2 instanceof Car);
