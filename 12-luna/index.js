const card = "4561-2612-1234-5467"; // true
const card2 = "4561-2612-1234-5464"; // false

function isCorrectCardNumber(card) {
  const res = card.replaceAll("-", "").split("");

  for (let i = 0; i < res.length; i += 2) {
    res[i] *= 2;
    if (res[i] > 9) {
      res[i] -= 9;
    }
  }

  return res.reduce((acc, el) => acc + Number(el), 0) % 10 === 0;
}

console.log(isCorrectCardNumber(card));
