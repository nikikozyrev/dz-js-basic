let positionLat = 20;
let positionLong = 15;
let addressLat = 100;
let addressLong = 100;

let distance =
  ((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2) **
  (1 / 2);

console.log(distance);
