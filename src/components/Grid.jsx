import React, { useState, useEffect } from "react";
import WorkoutCard from "./WorkoutCard.jsx";
import { workoutProgram as training_plan } from "../utils/index.js";

export default function Grid() {
  const [savedWorkouts, setSavedWorkouts] = useState(null); // State to manage saved workouts
  const [selectedWorkout, setSelectedWorkout] = useState(null); // State to manage the selected workout
  const completedWorkouts = []; // Number of completed workouts
  const isLocked = false;

  function handleSave(index, data) {
    // save to local storage and modify the saved workouts state
    const newObj = {
      ...savedWorkouts,
      [index]: {
        ...data,
        isComplete: !!data.isComplete || !!savedWorkouts?.[index]?.isComplete, // Keep the previous completion status if it exists
      },
    };
    setSavedWorkouts(newObj); // Update the saved workouts state
    localStorage.setItem("30tofit", JSON.stringify(newObj)); // Save to local storage
    setSavedWorkouts(null);
  }

  function handleComplete(index, data) {
    // mark the workout as completed and modify the saved workouts state
    const newObj = { ...data };
    newObj.isComplete = true; // Mark the workout as complete
    handleSave(index, newObj); // Save the updated workout
  }

  useEffect(() => {
    if (!localStorage) return; // Check if localStorage is available and savedWorkouts is not null
    let savedData = {};
    if (localStorage.getItem("30tofit")) {
      savedData = JSON.parse(localStorage.getItem("30tofit")); // Parse the saved data from local storage
    }
    setSavedWorkouts(savedData); // Update the saved workouts state with the parsed data
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="training-plan-grid">
      {Object.keys(training_plan).map((workout, workoutIndex) => {
        const type =
          workoutIndex % 3 === 0
            ? "Push"
            : workoutIndex % 3 === 1
            ? "Pull"
            : "Legs"; // Determine the type of workout based on the index

        const trainingPlan = training_plan[workoutIndex];

        const dayNum =
          workoutIndex / 8 <= 1 ? "0" + (workoutIndex + 1) : workoutIndex + 1;

        const icon =
          workoutIndex % 3 === 0 ? (
            <i className="fa-solid fa-dumbbell"></i> // If the first one is not locked, determine wich icon to show (Push)
          ) : workoutIndex % 3 === 1 ? (
            <i className="fa-solid fa-weight-hanging"></i> // Pull
          ) : (
            <i className="fa-solid fa-bolt"></i> // Legs
          );

        if (workoutIndex === selectedWorkout) {
          return (
            <WorkoutCard
              savedWeights={savedWorkouts?.[workoutIndex]?.weights} // Get the saved weights for the selected workout
              handleSave={handleSave}
              handleComplete={handleComplete}
              key={workoutIndex}
              trainingPlan={trainingPlan}
              type={type}
              workoutIndex={workoutIndex}
              icon={icon}
              dayNum={dayNum}
            />
          );
        }

        return (
          <button
            onClick={() => {
              setSelectedWorkout(workoutIndex); // Set the selected workout index
            }}
            className={"card plan-card  " + (isLocked ? "inactive" : "")}
            key={workoutIndex}
          >
            <div className="plan-card-header">
              <p>Day {dayNum}</p>
            </div>
            {isLocked ? (
              <i className="fa-solid fa-lock"></i> // If the workout is locked, show a lock icon
            ) : (
              icon
            )}
            <div className="plan-card-header">
              <h4>
                <b>{type}</b>
              </h4>
            </div>
          </button>
        );
      })}
    </div>
  );
}
