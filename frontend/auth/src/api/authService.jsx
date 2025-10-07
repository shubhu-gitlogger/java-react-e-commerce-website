import axios from "axios";

const API_URL = "http://localhost:8081/api/auth"; // your backend auth microservice

// Register user
export const register = async (username, email, password, role) => {
  return await axios.post(`${API_URL}/signup`, {
    username,
    email,
    password,
    role,
  });
};

// Login user
export const login = async (username, password) => {
  return await axios.post(`${API_URL}/signin`, { username, password });
};
