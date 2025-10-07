import React, { useState } from "react";
import { register } from "../api/authService";
import Navbar from "../components/Navbar";

export default function SignUp() {
  const [form, setForm] = useState({ username: "", email: "", password: "", role: "USER" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form.username, form.email, form.password, form.role);
      setMessage("User registered successfully!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full px-4 py-2 mb-3 border rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
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
        {/* <select name="role" onChange={handleChange} className="w-full px-4 py-2 mb-3 border rounded-lg">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select> */}
        <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
          Sign Up
        </button>
        {message && <p className="mt-4 text-center text-sm text-gray-600">{message}</p>}
      </form>
    </div>
    </>
  );
}
