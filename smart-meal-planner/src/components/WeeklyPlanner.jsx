// src/components/WeeklyPlanner.jsx

import React, { useState } from "react";
import Modal from './Modal';
import MealSearch from './MealSearch';
import './WeeklyPlanner.css';
import GroceryList from "./GroceryList";

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const meals = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

const WeeklyPlanner = ({
  plannedMeals,
  setPlannedMeals,
  //showGroceryList,
  //setShowGroceryList
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null); // { day, meal}
  const totalMealSlots = days.length * meals.length;
  const mealsPlannedCount = Object.keys(plannedMeals).length;

  //Eventually store meals here!
  const handleMealSelect = (meal) => {
    const key = `${selectedCell.day}-${selectedCell.meal}`;

    // Update the planned meal
    setPlannedMeals((prev) => ({
      ...prev,
      [key]: meal,
    }));

    setModalOpen(false);
  }

  return (
    <div className="weekly-planner">
      <h2>Weekly Meal Planner</h2>
      <p style={{ margin: '1rem 0', fontWeight: 'bold' }}>
        You've planned {mealsPlannedCount} out of {totalMealSlots} meals.
      </p>
      <table className="planner-table">
        <thead>
          <tr>
            <th></th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {meals.map((meal) => (
            <tr key={meal}>
              <td><strong>{meal}</strong></td>
              {days.map((day) => {
                const key = `${day}-${meal}`;
                const plannedMeal = plannedMeals[key];

                return (
                  <td key={key}>
                    {plannedMeal ? (
                      <div>
                        <strong>{plannedMeal.name}</strong>
                        <br />
                        <small>{plannedMeal.servings} servings</small>
                        <br />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'center' }}>
                          <button
                            className="button edit"
                            title="Change meal"
                            onClick={() => {
                              setSelectedCell({ day, meal });
                              setModalOpen(true);
                            }}
                          >
                            ✏️
                          </button>
                          <button
                            className="button remove-soft"
                            title="Remove meal"
                            onClick={() => {
                              if (window.confirm(`Are you sure you want to remove the ${meal} for ${day}?`)) {
                                const key = `${day}-${meal}`;
                                setPlannedMeals((prev) => {
                                  const newPlan = { ...prev };
                                  delete newPlan[key];
                                  return newPlan;
                                });
                              }
                            }}
                          >
                            🗑️
                          </button>
                        </div>



                      </div>
                    ) : (
                      <button
                        className="button"
                        onClick={() => {
                          setSelectedCell({ day, meal });
                          setModalOpen(true);
                        }}
                      >
                        {meal === 'Snack' ? '+ Add Snack' : '+ Add Meal'}
                      </button>

                    )}

                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {/* <button
        className="add-meal-btn"
        style={{ marginTop: '1rem' }}
        onClick={() => setShowGroceryList((prev) => !prev)}
      >
        {showGroceryList ? 'Hide Grocery List' : 'View Grocery List'}
      </button> */}


      {/* Modal with MealSearch inside */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <MealSearch
          onSelect={handleMealSelect}
          selectedCell={selectedCell}
          plannedMeals={plannedMeals}
        />
      </Modal>
    </div>
  );
};



export default WeeklyPlanner;