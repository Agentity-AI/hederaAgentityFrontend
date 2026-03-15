// api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://agentity-backend.onrender.com', 
  withCredentials:true
});
export default api;