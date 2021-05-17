import testIcon from '../public/images/test.png';
import practicalIcon from '../public/images/parctical.png';

export const PathNames = {
  login: '/login',
  registration: '/registration',
  confirmLogin: '/confirm-auth',
  completeRegistration: '/complete-registration',
  root: '/',
  tasks: '/tasks',
};

export const ACCESS_TOKEN_NAME = 'token';

export const TasksTypes = {
  Test: 'Test',
  Practical: 'Practical',
  CustomPractical: 'Custom practical',
};

export const TasksIconByType = {
  Test: testIcon,
  Practical: practicalIcon,
  'Custom practical': practicalIcon,
};
