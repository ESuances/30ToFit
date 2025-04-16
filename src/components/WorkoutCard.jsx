import React from "react";

export default function WorkoutCard(props) {
  // Exercise information, posibly add 3D model of the exercise
  const { trainingPlan, workoutIndex, type, dayNum, icon } = props;

  const { warmup, workout } = trainingPlan || {};

  return (
    <div className="workout-container">
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
        {warmup.map((warmupExercise, warmupIndex) => {
          return (
            <React.Fragment key={warmupIndex}>
              <div className="exercise-name">
                <p>
                  {warmupIndex + 1}. {warmupExercise.name}
                </p>
              </div>
              <p className="exercise-info">{warmupExercise.sets}</p>
              <p className="exercise-info">{warmupExercise.rets}</p>
              <input className="weight-input" placeholder="N/A" disabled />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
