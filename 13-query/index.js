const query1 = {
  search: "Вася",
  take: 10,
};

const query2 = {
  search: "Вася",
  take: 10,
  text: "DFfdergvderfg",
};

const queryToStr = (query) =>
  Object.keys(query)
    .map((el) => `${el}=${query[el]}`)
    .join("&");

console.log(queryToStr(query1));
console.log(queryToStr(query2));
