import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Change 5000 to your backend port
});

export async function handleMySignupFunction(data) {
  console.log("Signup request received:");
  return await axios.post('http://localhost:5000/pages/Signup', data)
}

export async function handleMyLoginFunction(data) {
  console.log("Login request received:");
  return await axios.post('http://localhost:5000/pages/Login', data)
}


export default API;