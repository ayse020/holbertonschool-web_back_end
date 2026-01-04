import Building from "./5-building.js";

const b = new Building(100);
console.log(b.sqft);

// Abstract sinif testi
try {
  class TestBuilding extends Building {}
  const test = new TestBuilding(200);
} catch (err) {
  console.log(err.message);
}

// Doğru extend etmə testi
class CorrectBuilding extends Building {
  evacuationWarningMessage() {
    return "Evacuate slowly";
  }
}

const correct = new CorrectBuilding(300);
console.log(correct.sqft);
console.log(correct.evacuationWarningMessage());
