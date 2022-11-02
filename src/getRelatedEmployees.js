const { employees } = require('../data/zoo_data');

const isManager = (id) => employees
  .some((funcionarios) => funcionarios.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  if (isManager(managerId) === true) {
    return employees.filter((helena) => helena.managers.includes(managerId))
      .map((leozinho) => `${leozinho.firstName} ${leozinho.lastName}`);
  }
};

module.exports = { isManager, getRelatedEmployees };
