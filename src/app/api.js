import { wretchWithAuth } from '../packages/utils';

const getUser = () => wretchWithAuth('/api/user/profile').get().json();

const getVerificationStatus = () =>
  wretchWithAuth('/api/user/verification-status').get().json();

export const appApi = {
  getUser,
  getVerificationStatus,
};
