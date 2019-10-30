import axios from 'axios';
import settings from '../config/settings'

const api = axios.create({
  baseURL: settings.MANAGER_API,
});

export default api;
