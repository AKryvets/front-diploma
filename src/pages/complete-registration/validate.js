import { single } from 'validate.js';
import isEmpty from 'lodash.isempty';
import pickBy from 'lodash.pickby';

const constraints = {
  isRequired: {
    presence: {
      message: 'Field is required',
    },
  },
  number: {
    numericality: {
      onlyInteger: true,
      greaterThan: 10,
      lessThan: 120,
    },
  },
};

export const validate = (data) => {
  const errors = {
    firstName: single(data.firstName, constraints.isRequired),
    lastName: single(data.lastName, constraints.isRequired),
    nickname: single(data.nickname, constraints.isRequired),
    age:
      single(data.age, constraints.number) ??
      single(data.age, constraints.isRequired),
  };
  const errorsWithMessage = pickBy(errors);

  return isEmpty(errorsWithMessage) ? null : errorsWithMessage;
};
