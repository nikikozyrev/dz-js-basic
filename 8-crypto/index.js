const str = "password"; //ssapdrow

function crypto(password) {
  const strToArray = password.split("");
  const halfPasswordQuantity = Math.floor(password.length / 2);
  const half1 = strToArray.slice(0, halfPasswordQuantity).reverse();
  const half2 = strToArray
    .slice(halfPasswordQuantity, strToArray.length)
    .reverse();
  return half1.concat(half2).join("");
}

const checkPassword = (cryptoPassword, password) =>
  !cryptoPassword ? false : crypto(cryptoPassword) === password;

console.log(crypto(str));
console.log(checkPassword("", ""));
