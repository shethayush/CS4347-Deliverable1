"use client";

import React, { useState } from "react";
import "./goals.css";

export default function GoalsPage() {
  const [goalsLogs, setGoalsLogs] = useState([
    { activity: "Running", description: "Run 5k in 30 minutes", target: 30, progress: 0, unit: "minutes", date: "2024-11-14" },
    { activity: "Cycling", description: "Cycle 20 km in 1 hour", target: 60, progress: 0, unit: "minutes", date: "2024-11-13" },
    { activity: "Weightlifting", description: "Lift 100 kg by end of the month", target: 100, progress: 0, unit: "kg", date: "2024-11-12" },
    { activity: "Meditation", description: "Meditate for 10 minutes daily", target: 10, progress: 0, unit: "minutes", date: "2024-11-10" }
  ]);

  const [newGoal, setNewGoal] = useState({ activity: "", description: "", target: "", progress: 0, unit: "", date: "" });
  const [filter, setFilter] = useState("");
  const [goalsLookup, setGoalsLookup] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGoal({ ...newGoal, [name]: value });
  };

  const handleAddGoal = () => {
    setGoalsLogs([...goalsLogs, newGoal]);
    setNewGoal({ activity: "", description: "", target: "", progress: 0, unit: "", date: "" });
  };

  const handleGoalsLookup = (activityName) => {
    const goal = goalsLogs.find(log => log.activity.toLowerCase() === activityName.toLowerCase());
    if (goal) {
      setGoalsLookup(goal);
    } else {
      setGoalsLookup(null);
    }
  };

  const handleProgressChange = (index, progress) => {
    const updatedGoals = [...goalsLogs];
    updatedGoals[index].progress = progress;
    setGoalsLogs(updatedGoals);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredLogs = filter
    ? goalsLogs.filter((log) => log.activity === filter)
    : goalsLogs;

  const calculateProgressPercentage = (goal) => {
    return ((goal.progress / goal.target) * 100).toFixed(0); // Round to nearest integer
  };

  return (
    <div className="goals-page-container">
      <h1 className="page-title">Workout and Wellness Goals</h1>

      {/* Add Goal Log */}
      <div className="add-goals-log">
        <h2>Add New Goal</h2>
        <form>
          <label>
            Activity Name:
            <input
              type="text"
              name="activity"
              value={newGoal.activity}
              onChange={handleInputChange}
              placeholder="e.g., Running"
              required
            />
          </label>
          <label>
            Goal Description:
            <input
              type="text"
              name="description"
              value={newGoal.description}
              onChange={handleInputChange}
              placeholder="e.g., Run 5k in 30 minutes"
              required
            />
          </label>
          <label>
            Target (e.g., time, weight):
            <input
              type="number"
              name="target"
              value={newGoal.target}
              onChange={handleInputChange}
              placeholder="e.g., 30"
              required
            />
          </label>
          <label>
            Unit (e.g., minutes, kg):
            <input
              type="text"
              name="unit"
              value={newGoal.unit}
              onChange={handleInputChange}
              placeholder="e.g., minutes"
              required
            />
          </label>
          <label>
            Date (Target Date or Frequency):
            <input
              type="date"
              name="date"
              value={newGoal.date}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="button" className="primary-button" onClick={handleAddGoal}>
            Add Goal
          </button>
        </form>
      </div>

      {/* Goals Lookup */}
      <div className="goals-lookup">
        <h2>Goals Lookup</h2>
        <input
          type="text"
          placeholder="Enter activity name"
          onChange={(e) => handleGoalsLookup(e.target.value)}
        />
        {goalsLookup ? (
          <div className="goals-details">
            <p><strong>Activity:</strong> {goalsLookup.activity}</p>
            <p><strong>Description:</strong> {goalsLookup.description}</p>
            <p><strong>Target:</strong> {goalsLookup.target} {goalsLookup.unit}</p>
            <p><strong>Progress:</strong> {goalsLookup.progress} {goalsLookup.unit}</p>
            <p><strong>Progress Percentage:</strong> {calculateProgressPercentage(goalsLookup)}%</p>
            <p><strong>Date:</strong> {goalsLookup.date}</p>
          </div>
        ) : (
          <p>Enter a valid activity name to see goal details.</p>
        )}
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <h2>Filter Goals Logs</h2>
        <label>
          Filter by Activity:
          <select value={filter} onChange={handleFilterChange}>
            <option value="">All Activities</option>
            <option value="Running">Running</option>
            <option value="Cycling">Cycling</option>
            <option value="Weightlifting">Weightlifting</option>
            <option value="Meditation">Meditation</option>
          </select>
        </label>
      </div>

      {/* Goal History */}
      <div className="goal-history">
        <h2>Goal History</h2>
        {filteredLogs.length === 0 ? (
          <p>No logs available.</p>
        ) : (
          <ul className="goals-list">
            {filteredLogs.map((log, index) => (
              <li key={index} className="goals-item">
                <p><strong>Activity:</strong> {log.activity}</p>
                <p><strong>Description:</strong> {log.description}</p>
                <p><strong>Target:</strong> {log.target} {log.unit}</p>
                <p><strong>Progress:</strong> {log.progress} {log.unit}</p>
                <p><strong>Progress Percentage:</strong> {calculateProgressPercentage(log)}%</p>
                <label>
                  Edit Progress:
                  <input
                    type="number"
                    value={log.progress}
                    onChange={(e) => handleProgressChange(index, e.target.value)}
                    max={log.target}
                  />
                </label>
                <p><strong>Date:</strong> {log.date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
