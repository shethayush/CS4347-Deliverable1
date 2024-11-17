"use client";

import React, { useState } from "react";
import "./goals.css";

export default function GoalsPage() {
  const [nutritionLogs, setNutritionLogs] = useState([
    { food: "Chicken Salad", calories: 350, date: "2024-11-14" },
    { food: "Protein Shake", calories: 200, date: "2024-11-13" },
    { food: "Oatmeal", calories: 150, date: "2024-11-12" },
  ]);

  const [macronutrients, setMacronutrients] = useState({
    "Chicken Salad": { protein: "25g", carbs: "10g", fats: "15g" },
    "Protein Shake": { protein: "30g", carbs: "5g", fats: "2g" },
    Oatmeal: { protein: "5g", carbs: "27g", fats: "3g" },
  });

  const [newLog, setNewLog] = useState({ food: "", calories: "", date: "" });
  const [filter, setFilter] = useState("");
  const [macronutrientLookup, setMacronutrientLookup] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLog({ ...newLog, [name]: value });
  };

  const handleAddLog = () => {
    setNutritionLogs([...nutritionLogs, newLog]);
    setNewLog({ food: "", calories: "", date: "" });
  };

  const handleMacronutrientLookup = (foodName) => {
    if (macronutrients[foodName]) {
      setMacronutrientLookup(macronutrients[foodName]);
    } else {
      setMacronutrientLookup(null);
    }
  };

  const filteredLogs = filter
    ? nutritionLogs.filter((log) =>
        filter === "above"
          ? parseInt(log.calories, 10) > 200
          : parseInt(log.calories, 10) <= 200
      )
    : nutritionLogs;

  return (
    <div className="nutrition-page-container">
      <h1 className="page-title">Goals</h1>

      {/* Add Nutrition Log */}
      <div className="add-nutrition-log">
        <h2>Add Nutrition Log</h2>
        <form>
          <label>
            Food Name:
            <input
              type="text"
              name="food"
              value={newLog.food}
              onChange={handleInputChange}
              placeholder="e.g., Chicken Salad"
              required
            />
          </label>
          <label>
            Calories:
            <input
              type="number"
              name="calories"
              value={newLog.calories}
              onChange={handleInputChange}
              placeholder="e.g., 350"
              required
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={newLog.date}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="button" className="primary-button" onClick={handleAddLog}>
            Add Log
          </button>
        </form>
      </div>

      {/* Macronutrient Lookup */}
      <div className="macronutrient-lookup">
        <h2>Macronutrient Lookup</h2>
        <input
          type="text"
          placeholder="Enter food name"
          onChange={(e) => handleMacronutrientLookup(e.target.value)}
        />
        {macronutrientLookup ? (
          <div className="macronutrient-details">
            <p><strong>Protein:</strong> {macronutrientLookup.protein}</p>
            <p><strong>Carbohydrates:</strong> {macronutrientLookup.carbs}</p>
            <p><strong>Fats:</strong> {macronutrientLookup.fats}</p>
          </div>
        ) : (
          <p>Enter a valid food name to see macronutrient details.</p>
        )}
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <h2>Filter Nutrition Logs</h2>
        <button
          className="filter-button"
          onClick={() => setFilter("above")}
        >
          Above 200 Calories
        </button>
        <button
          className="filter-button"
          onClick={() => setFilter("below")}
        >
          Below 200 Calories
        </button>
        <button className="filter-button reset" onClick={() => setFilter("")}>
          Reset Filter
        </button>
      </div>

      {/* Goals History */}
      <div className="nutrition-history">
        <h2>Goals History</h2>
        {filteredLogs.length === 0 ? (
          <p>No logs available.</p>
        ) : (
          <ul className="nutrition-list">
            {filteredLogs.map((log, index) => (
              <li key={index} className="nutrition-item">
                <p><strong>Food:</strong> {log.food}</p>
                <p><strong>Calories:</strong> {log.calories}</p>
                <p><strong>Date:</strong> {log.date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
