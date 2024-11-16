"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./workouts.css";

export default function WorkoutTracking() {
  const router = useRouter();

  const [workouts, setWorkouts] = useState([
    { type: "Running", duration: "30 mins", frequency: "Daily", intensity: "Moderate" },
    { type: "Yoga", duration: "45 mins", frequency: "Weekly", intensity: "Low" },
    { type: "Cycling", duration: "20 mins", frequency: "Weekly", intensity: "High" },
  ]);
  const [form, setForm] = useState({ type: "", duration: "", frequency: "", intensity: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const [filter, setFilter] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddWorkout = () => {
    if (isEditing) {
      const updatedWorkouts = [...workouts];
      updatedWorkouts[currentEditIndex] = form;
      setWorkouts(updatedWorkouts);
      setIsEditing(false);
      setCurrentEditIndex(null);
    } else {
      setWorkouts([...workouts, form]);
    }
    setForm({ type: "", duration: "", frequency: "", intensity: "" });
  };

  const handleEditWorkout = (index) => {
    setForm(workouts[index]);
    setIsEditing(true);
    setCurrentEditIndex(index);
  };

  const handleDeleteWorkout = (index) => {
    const updatedWorkouts = workouts.filter((_, i) => i !== index);
    setWorkouts(updatedWorkouts);
  };

  const filteredWorkouts = filter
    ? workouts.filter((workout) =>
        workout.type.toLowerCase().includes(filter.toLowerCase()) ||
        workout.intensity.toLowerCase().includes(filter.toLowerCase())
      )
    : workouts;

  return (
    <div className="workout-tracking-container">
      {/* Back Button */}
      <button onClick={() => router.back()} className="back-button">
        ⬅ Back
      </button>

      <h1 className="page-title">Workout Tracking</h1>

      {/* Add Workout Form */}
      <div className="add-workout-form">
        <h2>{isEditing ? "Edit Workout" : "Add Workout"}</h2>
        <form>
          <label>
            Workout Type:
            <input
              type="text"
              name="type"
              value={form.type}
              onChange={handleInputChange}
              placeholder="e.g., Running"
              required
            />
          </label>
          <label>
            Duration (mins):
            <input
              type="text"
              name="duration"
              value={form.duration}
              onChange={handleInputChange}
              placeholder="e.g., 30 mins"
              required
            />
          </label>
          <label>
            Frequency:
            <input
              type="text"
              name="frequency"
              value={form.frequency}
              onChange={handleInputChange}
              placeholder="e.g., Daily"
              required
            />
          </label>
          <label>
            Intensity:
            <input
              type="text"
              name="intensity"
              value={form.intensity}
              onChange={handleInputChange}
              placeholder="e.g., Moderate"
              required
            />
          </label>
          <button type="button" className="primary-button" onClick={handleAddWorkout}>
            {isEditing ? "Update Workout" : "Add Workout"}
          </button>
        </form>
      </div>

      {/* Filter Workouts */}
      <div className="filter-section">
        <h3>Filter Workouts</h3>
        <input
          type="text"
          placeholder="Filter by type or intensity"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {/* Workout History */}
      <div className="workout-history">
        <h2>Workout History</h2>
        {filteredWorkouts.length === 0 ? (
          <p>No workouts logged yet.</p>
        ) : (
          <ul className="workout-list">
            {filteredWorkouts.map((workout, index) => (
              <li key={index} className="workout-item">
                <div className="workout-details">
                  <p>
                    <strong>Type:</strong> {workout.type}
                  </p>
                  <p>
                    <strong>Duration:</strong> {workout.duration}
                  </p>
                  <p>
                    <strong>Frequency:</strong> {workout.frequency}
                  </p>
                  <p>
                    <strong>Intensity:</strong> {workout.intensity}
                  </p>
                </div>
                <div className="action-buttons">
                  <button onClick={() => handleEditWorkout(index)} className="secondary-button">
                    Edit
                  </button>
                  <button onClick={() => handleDeleteWorkout(index)} className="delete-button">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
