const hasLicence = true;
const age = 19;
const isDrunk = false;

let result = hasLicence && age >= 18 && !isDrunk ? "может ехать" : "иди домой";
console.log(result);
