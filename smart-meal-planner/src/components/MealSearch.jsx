// src/components/MealSearch.jsx
import React, { useState } from "react";

const mealOptions = [
  { name: "Chicken Tacos", ingredients: ["Chicken", "Tortilla", "Lettuce"] },
  { name: "Spaghetti", ingredients: ["Pasta", "Tomato Sauce", "Ground Beef"] },
  { name: "Salad", ingredients: ["Lettuce", "Tomato", "Cucumber", "Dressing"] },
];

const snackOptions = [
  { name: "Apple", ingredients: ["Apple"] },
  { name: "Banana", ingredients: ["Banana"] },
  { name: "Rice Cake", ingredients: ["Rice Cake"] },
  { name: "Orange", ingredients: ["Orange"] },
];

const MealSearch = ({ onSelect, selectedCell }) => {
  const [servingsMap, setServingsMap] = useState({});

  const isSnack = selectedCell?.meal === "Snack";
  const currentOptions = isSnack ? snackOptions : mealOptions;

  const handleChange = (mealName, value) => {
    setServingsMap((prev) => ({
      ...prev,
      [mealName]: value,
    }));
  };

  const handleSelect = (meal) => {
    const servings = parseInt(servingsMap[meal.name]) || 1;
    onSelect({ ...meal, servings });
  };

  return (
    <div>
      <h3>Select a {isSnack ? "Snack" : "Meal"}</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {currentOptions.map((meal, idx) => (
          <li key={idx} style={{ marginBottom: "1rem", textAlign: "left" }}>
            <strong>{meal.name}</strong>
            <br />
            Ingredients: {meal.ingredients.join(", ")}
            {!isSnack && (
              <>
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
              </>
            )}
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
