import { AxiosInstance } from 'axios';

export default (instance: AxiosInstance) => {
  // TODO: Add interceptors
  instance.interceptors.response.use((response) => response);
  return instance;
};
