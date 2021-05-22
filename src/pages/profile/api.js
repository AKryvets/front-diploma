import { wretchWithAuth } from '../../packages/utils';

const saveUserInfoById = (id, data) =>
  wretchWithAuth(`/api/user/${id}`).put(data).json();

export const completeRegistrationApi = {
  saveUserInfoById,
};
