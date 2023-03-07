import React from "react";
import "../style-sheets/Feedback.css";

//export -> exportacion nombrada, los que queramos
function Feedback(props) {
  return (
    <div className="feedback-container">
      <img
        className="feedback-img"
        src={require(`../img/${props.image}-img.png`)}
        alt="pfp"
      />
      <div className="feedback-text-container">
        <p className="feedback-text-name-city">
          <strong>{props.name}</strong> in {props.city}.
        </p>
        <p className="feedback-text-job-title">
          {props.job} @<strong>{props.company}</strong>
        </p>
        <p className="feedback-text-feedback">"{props.feedback}".</p>
      </div>
    </div>
  );
}

//exportacion por defecto 1 solo
export default Feedback;
