"use client"; // For Next.js client-side component

import React, { useState } from "react";
import { useRouter } from 'next/navigation'; // Next.js router for navigation
import "./signup.css";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    age: "",
    email: "",
    sex: "",
    phone: "",
    password: ""
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for required fields
    if (!formData.name || !formData.weight || !formData.age || !formData.email || !formData.sex || !formData.phone || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    // Additional validation for age and weight
    if (isNaN(formData.age) || formData.age <= 0) {
      setError("Please enter a valid age.");
      return;
    }
    if (isNaN(formData.weight) || formData.weight <= 0) {
      setError("Please enter a valid weight.");
      return;
    }

    setError("");
    router.push("/dashboard"); // Redirect to the dashboard after successful sign-up
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Your Account</h2>
        <p className="signup-subtitle">Sign up to get started</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Weight</label>
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Age</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Sex</label>
            <input
              type="text"
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-button">Create Account</button>
        </form>

        {/* Login link for existing users */}
        <div className="login-link">
          <p>Already have an account? <span onClick={() => router.push("/login")}>Log in</span></p>
        </div>
      </div>
    </div>
  );
}
