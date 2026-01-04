import Pricing from "./4-pricing.js";
import Currency from "./3-currency.js";

const euro = new Currency("EUR", "Euro");
const price = new Pricing(100, euro);
console.log(price.displayFullPrice());

console.log(Pricing.convertPrice(100, 1.2));
console.log(Pricing.convertPrice(200, 0.85));

// Test error handling
try {
  const wrongPrice = new Pricing("100", euro);
} catch (err) {
  console.log(err.message);
}

try {
  const wrongCurrency = new Pricing(100, "EUR");
} catch (err) {
  console.log(err.message);
}

try {
  console.log(Pricing.convertPrice("100", 1.2));
} catch (err) {
  console.log(err.message);
}
