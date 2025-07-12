// src/App.jsx
import React from 'react';
import WeeklyPlanner from './components/WeeklyPlanner';
import GroceryList from './components/GroceryList';
import './App.css';

function App() {
  const [plannedMeals, setPlannedMeals] = React.useState({});
  const [showGroceryList, setShowGroceryList] = React.useState(true);
  const [showHelp, setShowHelp] = React.useState(false);

  return (
    <div className="app-container">
      <h1>Smart Meal Planner & Grocery List Generator</h1>

      <button
        className="help-toggle-btn"
        onClick={() => setShowHelp((prev) => !prev)}
      >
        {showHelp ? 'Hide Help' : 'Show Help'}
      </button>

      {showHelp && (
        <div className="help-section">
          <h3>How to Use This App</h3>
          <ul>
            <li>Click "+ Add Meal" to add meals to your weekly plan.</li>
            <li>Use "Change" or "Remove" to modify a planned meal.</li>
            <li>Click "View Grocery List" to see all needed ingredients.</li>
            <li>Check off ingredients as you shop.</li>
          </ul>
        </div>
      )}

      <button
        className="add-meal-btn"
        style={{ marginBottom: '1rem' }}
        onClick={() => setShowGroceryList(prev => !prev)}
      >
        {showGroceryList ? 'Hide Grocery List' : 'View Grocery List'}
      </button>

      <div className="app-layout">
        <WeeklyPlanner
          plannedMeals={plannedMeals}
          setPlannedMeals={setPlannedMeals}
        />
        {showGroceryList && (
          <div className="grocery-list">
            <GroceryList plannedMeals={plannedMeals} />
          </div>
        )}
      </div>
    </div>
  );

}

export default App;
