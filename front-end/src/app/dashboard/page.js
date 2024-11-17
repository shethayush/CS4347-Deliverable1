"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./dashboard.css";

export default function Dashboard() {
  const router = useRouter();
    
  const userProfile = {
    name: "John Doe",
    age: 28,
    weight: "70 kg",
  };

  const recentWorkouts = [
    { type: "Running", duration: "30 mins", intensity: "Moderate" },
    { type: "Yoga", duration: "45 mins", intensity: "Low" },
    { type: "Cycling", duration: "20 mins", intensity: "High" },
  ];

  const nutritionLogs = [
    { food: "Chicken Salad", calories: 350 },
    { food: "Protein Shake", calories: 200 },
    { food: "Oatmeal", calories: 150 },
  ];

  const goals = [
    { goal: "Run 5km in 30 mins", progress: "80%" },
    { goal: "Lose 5kg in 3 months", progress: "60%" },
    { goal: "Meditate for 10 mins daily", progress: "90%" },
  ];

  // Dynamic background color based on route
  const getBackgroundColor = () => {
    switch (router.pathname) {
      case "/":
      case "/login":
        return "#9d9d9d"; // Light background for login
      case "/dashboard":
        return "#058c83"; // Blue-green background for dashboard
      default:
        return "#ffffff"; // Default background
    }
  };

  return (
    <div className="dashboard-container" style={{ backgroundColor: getBackgroundColor(), minHeight: "100vh" }} >
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">WeFit</div>
        <nav className="nav-menu">
          <button
            className="nav-item active"
            onClick={() => router.push("/dashboard")}
          >
            🏠 <span>Dashboard</span>
          </button>
          <button
            className="nav-item"
            onClick={() => router.push("/add-workout")}
          >
            💪 <span>Workout</span>
          </button>
          <button
            className="nav-item"
            onClick={() => router.push("/nutrition")}
          >
            🍎 <span>Nutrition</span>
          </button>
          <button
            className="nav-item"
            onClick={() => router.push("/goals")}
          >
            🎯 <span>Goals</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content" >
        <header className="dashboard-header">
          <h1 className="welcome-title">Hello, {userProfile.name}</h1>
          <p className="subtitle">Keep Moving & Stay Healthy</p>
        </header>

        <section className="info-cards">
          <div className="info-card">
            <h2>Latest Workouts</h2>
            <ul>
              {recentWorkouts.map((workout, index) => (
                <li key={index}>
                  <strong>{workout.type}</strong>: {workout.duration},{" "}
                  {workout.intensity}
                </li>
              ))}
            </ul>
            <button
              onClick={() => router.push("/add-workout")}
              className="action-button"
            >
              Add Workout
            </button>
          </div>

          <div className="info-card">
            <h2>Recent Nutrition Logs</h2>
            <ul>
              {nutritionLogs.map((log, index) => (
                <li key={index}>
                  <strong>{log.food}</strong>: {log.calories} calories
                </li>
              ))}
            </ul>
            <button
              onClick={() => router.push("/nutrition")}
              className="action-button"
            >
              Add Nutrition Entry
            </button>
          </div>

          <div className="info-card">
            <h2>Goals & Progress</h2>
            <ul>
              {goals.map((goal, index) => (
                <li key={index}>
                  <strong>{goal.goal}</strong> - Progress: {goal.progress}
                </li>
              ))}
            </ul>
            <button
              onClick={() => router.push("/goals")}
              className="action-button"
            >
              Add Goal
            </button>
          </div>
        </section>
      </main>

      {/* Profile Summary */}
      <aside className="profile-summary">
        <div className="profile-card">
          <img
            src="/path/to/profile-image.jpg"
            alt="Profile"
            className="profile-image"
          />
          <h2>{userProfile.name}</h2>
          <p>Age: {userProfile.age}</p>
          <p>Weight: {userProfile.weight}</p>
          <button
            onClick={() => router.push("/edit-profile")}
            className="edit-button"
          >
            Edit Profile
          </button>
          <button onClick={() => router.push("/login")} className="signout-button">
            Sign Out
          </button>
        </div>
      </aside>
    </div>
  );
}
