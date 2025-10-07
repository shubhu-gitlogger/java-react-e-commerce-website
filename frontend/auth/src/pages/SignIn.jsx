import React, { useState } from "react";
import { login } from "../api/authService";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function SignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form.username, form.password);
      localStorage.setItem("token", res.data.token); // save JWT
      localStorage.setItem("userId", res.data.id);
      localStorage.setItem("username", res.data.username);
      navigate("/");

    } catch (error) {
      setMessage(error.response?.data?.message || "Invalid credentials!");
    }
  };

  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full px-4 py-2 mb-3 border rounded-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full px-4 py-2 mb-3 border rounded-lg"
        />
        <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
          Sign In
        </button>
        {message && <p className="mt-4 text-center text-sm text-gray-600">{message}</p>}
      </form>
    </div>
    </>
  );
}
