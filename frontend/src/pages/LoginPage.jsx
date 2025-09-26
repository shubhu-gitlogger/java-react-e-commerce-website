import React from "react";
import AuthForm from "../components/AuthForm";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const handleLogin = async (formData) => {
    try {
      const response = await loginUser(formData);
      console.log("Login successful:", response.data);
      // store JWT in localStorage/sessionStorage
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
};

export default LoginPage;
