import axios from 'axios';
import withInterceptors from './withInterceptors';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  params: {
    appid: process.env.REACT_APP_API_TOKEN,
    units: 'metric',
  },
});

export default withInterceptors(api);
