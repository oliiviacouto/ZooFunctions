const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const avaliaIdadeAnimal = species.filter((especie) => especie.name === animal)[0].residents
    .every((idade) => idade.age >= age);
  return avaliaIdadeAnimal;
};
module.exports = getAnimalsOlderThan;
