import WorkoutCard from "./WorkoutCard.jsx";
import { workoutProgram as training_plan } from "../utils/index.js";

export default function Grid() {
  const isLocked = true;
  const selectedWorkout = 4; // This should be set based on the selected workout

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
