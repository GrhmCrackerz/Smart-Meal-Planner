// src/components/MealSearch.jsx
import React, { useState } from "react";

// Example meal options
const mealOptions = [
  { name: "Chicken Tacos", ingredients: ["Chicken", "Tortilla", "Lettuce"] },
  { name: "Spaghetti", ingredients: ["Pasta", "Tomato Sauce", "Ground Beef"] },
  { name: "Salad", ingredients: ["Lettuce", "Tomato", "Cucumber", "Dressing"] },
];

const MealSearch = ({ onSelect }) => {
  // Track servings input per meal by index or name
  const [servingsMap, setServingsMap] = useState({});

  const handleChange = (mealName, value) => {
    setServingsMap((prev) => ({
      ...prev,
      [mealName]: value,
    }));
  };

  const handleSelect = (meal) => {
    const servings = parseInt(servingsMap[meal.name]) || 1; // Default to 1 if empty
    onSelect({ ...meal, servings });
  };

  return (
    <div>
      <h3>Select a Meal</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {mealOptions.map((meal, idx) => (
          <li key={idx} style={{ marginBottom: "1rem", textAlign: "left" }}>
            <strong>{meal.name}</strong>
            <br />
            Ingredients: {meal.ingredients.join(", ")}
            <br />
            <label>
              Servings:{" "}
              <input
                type="number"
                min="1"
                value={servingsMap[meal.name] || ""}
                onChange={(e) => handleChange(meal.name, e.target.value)}
                style={{ width: "50px", marginLeft: "0.5rem" }}
              />
            </label>
            <br />
            <button className="button" onClick={() => handleSelect(meal)}>
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealSearch;
