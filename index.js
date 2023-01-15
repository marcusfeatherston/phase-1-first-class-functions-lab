const returnFirstTwoDrivers = (driversNames) => {
  return driversNames.slice(0, 2);
};

const returnLastTwoDrivers = (driversNames) => {
  return driversNames.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (farePrice) => {
  return (multiplier) => multiplier * farePrice;
};

const fareDoubler = (fare) => {
  return createFareMultiplier(fare)(2);
};

const fareTripler = (fare) => {
  return createFareMultiplier(fare)(3);
};

const selectDifferentDrivers = (driverArray, selectDrivers) => {
  return selectDrivers(driverArray);
};

console.log(
  selectDifferentDrivers(
    ["Antonia", "Nuru", "Amari", "Mo"],
    returnLastTwoDrivers
  )
);

console.log(
  selectDifferentDrivers(
    ["Antonia", "Nuru", "Amari", "Mo"],
    returnFirstTwoDrivers
  )
);
