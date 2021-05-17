import { single } from 'validate.js';
import isEmpty from 'lodash.isempty';
import pickBy from 'lodash.pickby';

import { formatError } from '../../packages/utils';

const constraints = {
  isRequired: {
    presence: {
      message: 'Field is required',
    },
  },
};

export const validate = (data) => {
  const errors = {
    title: single(data.title, constraints.isRequired),
    description: single(data.description, constraints.isRequired),
    type: single(data.type, constraints.isRequired),
  };

  const errorsWithMessage = pickBy(errors);

  return isEmpty(errorsWithMessage) ? null : formatError(errorsWithMessage);
};
