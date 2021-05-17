import { wretchWithAuth } from '../../packages/utils';

const getTasks = (query) =>
  wretchWithAuth('/api/tasks').query(query).get().json();

const createTask = (data) =>
  wretchWithAuth('/api/tasks/create').post(data).json();

export const tasksApi = {
  getTasks,
  createTask,
};
