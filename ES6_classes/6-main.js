import SkyHighBuilding from "./6-sky_high.js";
import Building from "./5-building.js";

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());

// Error test
try {
  const wrong = new SkyHighBuilding(100, "10");
} catch (err) {
  console.log(err.message);
}

// Building metodlarının işlədiyini yoxlayaq
console.log(building instanceof Building);
