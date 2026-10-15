import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Change 5000 to your backend port
});

export default API;