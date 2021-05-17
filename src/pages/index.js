export {
  LoginPage,
  watchAuthSaga,
  authReducer,
  RegistrationPage,
  authReducerNamespace,
} from './auth';
export { ConfirmLogin, watchAuthConfirmationSaga } from './confirm-login';
export {
  CompleteRegistration,
  completeRegistrationReducerNamespace,
  completeRegistrationReducer,
  watchCompleteRegistration,
} from './complete-registration';
export { Dashboard } from './dashboard';
export {
  Tasks,
  tasksReducer,
  tasksReducerNamespace,
  watchTasks,
} from './tasks';
