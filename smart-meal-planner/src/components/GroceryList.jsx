import React, { useState } from "react";

const GroceryList = ({ plannedMeals }) => {
  const ingredientCount = {};

  // Loop through each meal and count ingredients
  Object.values(plannedMeals).forEach((meal) => {
    const servings = parseInt(meal.servings) || 1;

    meal.ingredients.forEach((ingredient) => {
      if (!ingredientCount[ingredient]) {
        ingredientCount[ingredient] = 0;
      }
      ingredientCount[ingredient] += servings;
    });
  });

  const [checkedItems, setCheckedItems] = useState(new Set());

  const toggleChecked = (item) => {
    setCheckedItems((prev) => {
      const updated = new Set(prev);
      if (updated.has(item)) {
        updated.delete(item);
      } else {
        updated.add(item);
      }
      return updated;
    });
  };

  return (
    <div style={styles.container}>
      <h3>Grocery List</h3>
      <ul style={styles.list}>
        {Object.entries(ingredientCount).map(([ingredient, count], index) => (
          <li
            key={index}
            style={{
              ...styles.listItem,
              ...(checkedItems.has(ingredient) ? styles.checked : {}),
            }}
          >
            <label>
              <input
                type="checkbox"
                checked={checkedItems.has(ingredient)}
                onChange={() => toggleChecked(ingredient)}
                style={{ marginRight: "0.5rem" }}
              />
              {ingredient} – {count} unit{count > 1 ? "s" : ""}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    marginTop: "2rem",
    backgroundColor: "#fff8f2",
    padding: "1rem",
    borderRadius: "10px",
    border: "1px solid #f2e6dc",
    maxWidth: "400px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: "8px",
    fontSize: "1rem",
  },
  checked: {
    textDecoration: "line-through",
    color: "#999",
  },
};

export default GroceryList;
