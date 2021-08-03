import api from 'api';

export const fetchCityRequest = async (): Promise<String> => {
  try {
    await api.get('/');
    return 'Some another city';
  } catch (e) {
    return 'Some another city';
  }
};
