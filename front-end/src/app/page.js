"use client"; // This line makes it a Client Component

import React, { useState } from "react";
import { useRouter } from 'next/navigation'; // Use Next.js router instead of react-router
import "./login/login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Initialize Next.js router

  const [isLoading, setIsLoading] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address.");
    return;
  }

  setError("");
  setIsLoading(true); // Start loading state
  router.push("/dashboard");
};


  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Log in to your account to continue</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log in"}
          </button>

        </form>

        <div className="login-footer">
          <p>
            Don’t have an account?{" "}
            <span className="signup-link" onClick={() => router.push("/signup")}>
              Sign Up
            </span>
          </p>
          <a href="#!" className="forgot-password">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}
