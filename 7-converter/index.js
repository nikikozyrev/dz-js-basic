function converter(sum, fromСurrency, toCurrency) {
  const USD_TO_RUB = 90;
  const EUR_TO_RUB = 98;
  const USD_TO_EUR = 0.92;

  if (fromСurrency === "доллар" && toCurrency === "рубль") {
    return sum * USD_TO_RUB;
  }
  if (fromСurrency === "рубль" && toCurrency === "доллар") {
    return sum / USD_TO_RUB;
  }
  if (fromСurrency === "евро" && toCurrency === "доллар") {
    return sum / USD_TO_EUR;
  }
  if (fromСurrency === "доллар" && toCurrency === "евро") {
    return sum * USD_TO_EUR;
  }
  if (fromСurrency === "евро" && toCurrency === "рубль") {
    return sum * EUR_TO_RUB;
  }
  if (fromСurrency === "рубль" && toCurrency === "евро") {
    return sum / EUR_TO_RUB;
  }
  return null;
}

console.log(converter(1000, "доллар", "рубль"));
console.log(converter(1000, "рубль", "доллар"));
console.log(converter(1000, "евро", "доллар"));
console.log(converter(1000, "доллар", "евро"));
console.log(converter(1000, "евро", "рубль"));
console.log(converter(1000, "рубль", "евро"));
console.log(converter(1000, "франк", "евро"));
