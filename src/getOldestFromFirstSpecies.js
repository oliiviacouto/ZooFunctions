const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const leozinho = employees.filter((ids) => ids.id === id)
    .map((element) => element.responsibleFor[0]).filter((idAnimal) => idAnimal);
  const helena = leozinho.toString();
  const tica = species.filter((animal) => animal.id === helena)
    .map((residentes) => residentes.residents)
    .flat().sort((a, b) => a.age - b.age);
  return Object.values(tica[tica.length - 1]);
};

module.exports = getOldestFromFirstSpecies;
