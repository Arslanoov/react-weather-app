import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';

export default (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 404) {
        toast('City not found.', {
          type: 'error',
        });
      }
      return Promise.reject(error);
    },
  );
  return instance;
};
