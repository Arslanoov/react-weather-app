import axios from 'axios';
import withInterceptors from './withInterceptors';

const api = axios.create({
  baseURL: process.env.BASE_API_URL,
  withCredentials: true,
});

export default withInterceptors(api);
