import { TasksTypes } from './consts';

export const getTaskTypesOptions = () =>
  Object.values(TasksTypes).map((type) => ({ label: type, value: type }));
