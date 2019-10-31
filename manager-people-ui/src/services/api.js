import axios from 'axios';
import settings from '../config/settings'

const api = axios.create({
  baseURL: `${settings.MANAGER_API}/api/person`,
});

export default api;
