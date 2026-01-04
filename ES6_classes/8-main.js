import HolbertonClass from "./8-hbtn_class.js";

const hc = new HolbertonClass(12, "Mezzanine");
console.log(Number(hc));
console.log(String(hc));

const hc2 = new HolbertonClass(20, "First Floor");
console.log(hc + hc2);
console.log(`${hc} is on the ${hc2}`);

console.log(hc.size);
console.log(hc.location);

try {
  const wrong = new HolbertonClass("12", "Mezzanine");
} catch (err) {
  console.log(err.message);
}
