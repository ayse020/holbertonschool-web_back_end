import Currency from "./3-currency.js";

const dollar = new Currency("USD", "United States Dollar");
console.log(dollar.displayFullCurrency());

const euro = new Currency("EUR", "Euro");
console.log(euro.displayFullCurrency());

// Test getter və setter
console.log(dollar.code);
dollar.code = "GBP";
console.log(dollar.code);

try {
  dollar.code = 123;
} catch (err) {
  console.log(err.message);
}
