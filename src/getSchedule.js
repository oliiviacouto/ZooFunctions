const { species, hours } = require('../data/zoo_data');

const daysOfWeek = Object.keys(hours);
const names = species.map((specie) => specie.name);

function isName(name) {
  return names.includes(name);
}

function isDay(day) {
  return daysOfWeek.includes(day);
}

function getAnimalSchedule(name) {
  const { availability } = species.find((specie) => specie.name === name);
  return availability;
}

function formatOfficeHour({ open, close }) {
  return `Open from ${open}am until ${close}pm`;
}

function getDaySchedule(day) {
  const result = {};
  let exhibition;
  let officeHour;

  if (day === 'Monday') {
    exhibition = 'The zoo will be closed!';
    officeHour = 'CLOSED';
  } else {
    officeHour = formatOfficeHour(hours[day]);
    exhibition = species
      .filter((specie) => specie.availability.includes(day))
      .map((specie) => specie.name);
  }

  result[day] = { officeHour, exhibition };

  return result;
}

function getFullSchedule() {
  let result = {};
  daysOfWeek.forEach((day) => {
    result = Object.assign(getDaySchedule(day), result);
  });

  return result;
}

function getSchedule(scheduleTarget) {
  if (isName(scheduleTarget)) {
    return getAnimalSchedule(scheduleTarget);
  }
  if (isDay(scheduleTarget)) {
    return getDaySchedule(scheduleTarget);
  }
  return getFullSchedule();
}
module.exports = getSchedule;
