import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/auth"; // Change when backend is ready

export const loginUser = async (credentials) => {
  return axios.post(`${API_BASE_URL}/login`, credentials);
};

export const registerUser = async (userData) => {
  return axios.post(`${API_BASE_URL}/register`, userData);
};
