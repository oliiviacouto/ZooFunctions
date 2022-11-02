const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((obj1) => obj1.age > 0 && obj1.age < 18).length;
  const adult = entrants.filter((obj2) => obj2.age >= 18 && obj2.age < 50).length;
  const senior = entrants.filter((obj3) => obj3.age >= 50).length;
  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitantes = Object.values(countEntrants(entrants));
  const leozinho = visitantes[0] * prices.child;
  const tica = visitantes[1] * prices.adult;
  const helena = visitantes[2] * prices.senior;
  const total = leozinho + tica + helena;
  return total;
};
module.exports = { calculateEntry, countEntrants };
