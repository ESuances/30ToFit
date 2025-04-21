import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Hero() {
  const [openSections, setOpenSections] = useState({
    benefits: false,
    rules: false,
    trainingPlan: false,
  });

  const handleToggle = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="collapsible-sections">
      {/* Benefits Section */}
      <div className="section">
        <button
          className="section-header"
          onClick={() => handleToggle("benefits")}
        >
          <span>Program Benefits 💪</span>
          {openSections.benefits ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        <div
          className={`section-content ${openSections.benefits ? "open" : ""}`}
        >
          <h5>Complete this training program if you want to ...</h5>
          <ol className="benefits-list">
            <li>Follow a simple program with guaranteed results!</li>
            <li>Get fit, healthy and strong in 30 days!</li>
            <li>
              Learn more about working out at home using proven training
              techniques
            </li>
            <li>Become a better version of yourself! 💪🤩</li>
          </ol>
        </div>
      </div>

      {/* Rules Section */}
      <div className="section">
        <button
          className="section-header"
          onClick={() => handleToggle("rules")}
        >
          <span>Program Rules 📏❗</span>
          {openSections.rules ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        <div className={`section-content ${openSections.rules ? "open" : ""}`}>
          <h3>The Rules</h3>
          <p>
            To complete this program, you <b>MUST </b>follow these 2 simple
            rules:
          </p>
          <ul className="rules-list">
            <li className="rule-item">
              <p>
                <b>Rest</b>
              </p>
              <p>
                Ensure you're taking rest days every 3 days, your body needs it
                to get stronger
              </p>
            </li>
            <li className="rule-item">
              <p>
                <b>Reps</b>
              </p>
              <p>
                Every repetition should be done with a slow and controlled
                movement, using a{" "}
                <abbr title="2 seconds down - 2 seconds pause - 2 seconds up">
                  2 - 2 - 2 tempo
                </abbr>
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Training Plan Section */}
      <div className="section">
        <button
          className="section-header"
          onClick={() => handleToggle("trainingPlan")}
        >
          <span>Training Plan 🏋️</span>
          {openSections.trainingPlan ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        <div
          className={`section-content ${
            openSections.trainingPlan ? "open" : ""
          }`}
        >
          <h3>The Training Plan</h3>
          <p>
            This training plan uses a structure known as the <b>Bro Split</b>,
            used in gym workout routines, and follows this rotation ⬇️
          </p>
          <p>
            <b>
              <i>Push &rarr; Pull &rarr; Legs &rarr; Repeat</i>
            </b>
          </p>
          <p>
            Complete all of the workouts below and track your progress along the
            way! ✅
          </p>
        </div>
      </div>
    </div>
  );
}
