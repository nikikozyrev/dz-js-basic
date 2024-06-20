const dates = [
  "28.02.23",
  "29.2.23",
  "29.02.24",
  "10.13.22",
  "0.13.22",
  "5.5.2025",
  "11/12/2023",
  "11.12.23",
  "1.1.1",
  "1.1.111",
  "00/13/2022",
  "10-05-2023",
  "10-05-20235",
  "10-05-1997",
  "31-04-1997",
  "10-05-75",
  "41.12",
  "30.12",
  "тест",
  "тест-тест",
];

function formattingDate(arr) {
  const res = [];

  arr.forEach((el) => {
    if (el.includes("/")) {
      res.push(el.split("/"));
    }
    if (el.includes(".")) {
      res.push(el.split("."));
    }
    if (el.includes("-")) {
      res.push(el.split("-"));
    }
  });

  const validYearAndLength = res.filter(
    (el) =>
      el.length === 3 &&
      (el[2].length === 1 || el[2].length === 2 || el[2].length === 4)
  );

  const res28days = validYearAndLength.filter(
    (el) => el[0] > 0 && el[0] < 29 && el[1] == 2 && el[2] % 4 !== 0
  );

  const res29days = validYearAndLength.filter(
    (el) => el[0] > 0 && el[0] < 30 && el[1] == 2 && el[2] % 4 === 0
  );

  const res30days = validYearAndLength.filter(
    (el) =>
      el[0] > 0 &&
      el[0] < 31 &&
      (el[1] == 4 || el[1] == 6 || el[1] == 9 || el[1] == 11)
  );

  const res31days = validYearAndLength.filter(
    (el) =>
      el[0] > 0 &&
      el[0] < 32 &&
      (el[1] == 1 ||
        el[1] == 3 ||
        el[1] == 5 ||
        el[1] == 7 ||
        el[1] == 8 ||
        el[1] == 10 ||
        el[1] == 12)
  );

  const result = [].concat(res28days, res29days, res30days, res31days);

  result.forEach((el) => {
    if (el[0].length !== 2) {
      el[0] = `0${el[0]}`;
    }
    if (el[1].length !== 2) {
      el[1] = `0${el[1]}`;
    }
    if (el[2].length > 1) {
      el[2] = el[2].slice(-2);
    }
    if (el[2].length === 1) {
      el[2] = `0${el[2]}`;
    }
  });

  return result.map((el) => el.join("."));
}

console.log(formattingDate(dates));
