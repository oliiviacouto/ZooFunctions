const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animaisId = data.species.filter((id) => ids.includes(id.id));
  return animaisId;
}
module.exports = getSpeciesByIds;
