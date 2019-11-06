/* This component will be for all of the buttons that we have in our application. */
import React from "react";

const Button = props => {
  return (
    <input type="button" value={props.label} onClick={props.handleClick} />
  );
};

export default Button;
