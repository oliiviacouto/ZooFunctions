const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  const procuraFuncionario = employees
    .find((nameOrlastName) => nameOrlastName.firstName
      .includes(employeeName) || nameOrlastName.lastName.includes(employeeName));
  return procuraFuncionario;
};

module.exports = getEmployeeByName;
