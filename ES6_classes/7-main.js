import Airport from "./7-airport.js";

const airportSF = new Airport("San Francisco Airport", "SFO");
console.log(airportSF.toString());
console.log(String(airportSF));
console.log(airportSF);

// Getter və setter testi
console.log(airportSF.name);
console.log(airportSF.code);

airportSF.name = "SF International";
airportSF.code = "SF0";
console.log(airportSF.name);
console.log(airportSF.code);

// Error test
try {
  const wrong = new Airport(123, "ABC");
} catch (err) {
  console.log(err.message);
}
