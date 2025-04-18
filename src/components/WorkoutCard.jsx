import React, { useState } from "react";
import Modal from "./Modal";
import { exerciseDescriptions } from "../utils";

export default function WorkoutCard(props) {
  // Exercise information, posibly add 3D model of the exercise
  const {
    trainingPlan,
    workoutIndex,
    type,
    dayNum,
    icon,
    savedWeights,
    handleSave,
    handleComplete,
  } = props;

  const { warmup, workout } = trainingPlan || {};

  const [showExerciseDescription, setShowExerciseDescription] = useState(null);

  // Might delete this since I don't plan to add weights but 3D models of the exercises
  const [weights, setweights] = useState(savedWeights || {}); // State to manage weights for each exercise

  function handleAddWeight(title, weight) {
    const newObj = {
      ...weights,
      [title]: weight,
    };
    setweights(newObj); // Update the weights state with the new weight for the exercise
  }

  return (
    <div className="workout-container">
      {showExerciseDescription && (
        <Modal
          showExcerciseDescription={showExerciseDescription}
          handleCloseModal={() => {
            setShowExerciseDescription(null);
          }}
        />
      )}
      <div className="workout-card card">
        <div className="plan-card-header">
          <p>Day {dayNum}</p>
          {icon}
        </div>
        <div className="plan-card-header">
          <h2>
            <b>{type + " Workout"}</b>
          </h2>
        </div>
      </div>
      <div className="workout-grid">
        <div className="exercise-name">
          <h4>Warmup</h4>
        </div>
        <h6>Sets</h6>
        <h6>Reps</h6>
        <h6 className="weight-input">Weight</h6>
        {warmup.map((warmupExercise, wIndex) => {
          return (
            <React.Fragment key={wIndex}>
              <div className="exercise-name">
                <p>
                  {wIndex + 1}. {warmupExercise.name}
                  <button
                    onClick={() => {
                      setShowExerciseDescription({
                        name: warmupExercise.name,
                        description: exerciseDescriptions[warmupExercise.name],
                      });
                    }}
                    className="help-icon"
                  >
                    <i className="fa-regular fa-circle-question" />
                  </button>
                </p>
              </div>
              <p className="exercise-info">{warmupExercise.sets}</p>
              <p className="exercise-info">{warmupExercise.reps}</p>
              <input className="weight-input" placeholder="N/A" disabled />
            </React.Fragment>
          );
        })}
      </div>
      <div className="workout-grid">
        <div className="exercise-name">
          <h4>Workout</h4>
        </div>
        <h6>Sets</h6>
        <h6>Reps</h6>
        <h6 className="weight-input">Weight</h6>
        {workout.map((workoutExercise, wIndex) => {
          return (
            <React.Fragment key={wIndex}>
              <div className="exercise-name">
                <p>
                  {wIndex + 1}. {workoutExercise.name}
                  <button
                    onClick={() => {
                      setShowExerciseDescription({
                        name: workoutExercise.name,
                        description: exerciseDescriptions[workoutExercise.name],
                      });
                    }}
                    className="help-icon"
                  >
                    <i className="fa-regular fa-circle-question" />
                  </button>
                </p>
              </div>
              <p className="exercise-info">{workoutExercise.sets}</p>
              <p className="exercise-info">{workoutExercise.reps}</p>
              <input
                value={weights[workoutExercise.name || ""]}
                onChange={(e) => {
                  handleAddWeight(workoutExercise.name, e.target.value); // Update the weight for the exercise
                }}
                className="weight-input"
                placeholder="N/A"
                disabled
              />
            </React.Fragment>
          );
        })}
      </div>
      <div className="workout-buttons">
        <button
          onClick={() => {
            handleSave(workoutIndex, { weights });
          }}
        >
          Save & Exit
        </button>
        <button
          onClick={() => {
            handleComplete(workoutIndex, { weights });
          }}
          disabled={true}
        >
          Complete
        </button>
      </div>
    </div>
  );
}
