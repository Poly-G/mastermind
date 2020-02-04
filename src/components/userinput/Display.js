import React from "react";

const Display = props => {
  let { correct, contains, currentGuess } = props;

  let display;

  display = (
    <div className="incorrect-guess">
      <h3>INCORRECT GUESS</h3>
      <p>{currentGuess}</p>
      <p>{correct} Number(s) is correct, and in the correct location</p>
      <p>{contains} Number(s) is correct, but in the wrong location</p>
    </div>
  );

  return display;
};

export default Display;
