const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  const leozinho = {};
  if (!animal) {
    species.forEach((specie) => {
      leozinho[specie.name] = specie.residents.length;
    });
    return leozinho;
  }
  if (!animal.sex) {
    return species.find((specie) => specie.name === animal.specie)
      .residents.length;
  }
  return species.find((specie) => specie.name === animal.specie).residents
    .filter((tica) => tica.sex === animal.sex).length;
};

module.exports = countAnimals;
