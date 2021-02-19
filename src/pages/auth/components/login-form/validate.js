import { validate as valid } from 'validate.js';

import { formatError } from '../../../../packages';

const constraints = {
  email: {
    presence: {
      message: 'Field is required',
    },
    email: {
      message: 'is not valid',
    },
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: 'must be at least 6 characters',
    },
  },
};

export const validate = (data) => {
  const errors = valid(data, constraints);

  return errors ? formatError(errors) : null;
};
