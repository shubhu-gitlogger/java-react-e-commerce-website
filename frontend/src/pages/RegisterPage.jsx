import React from "react";
import AuthForm from "../components/AuthForm";
import { registerUser } from "../services/api";

const RegisterPage = () => {
  const handleRegister = async (formData) => {
    try {
      const response = await registerUser(formData);
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
    }
  };

  return <AuthForm type="register" onSubmit={handleRegister} />;
};

export default RegisterPage;
