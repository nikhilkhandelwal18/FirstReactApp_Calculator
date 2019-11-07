/* This component will be used to render the title at the top of our application, “GeeksforGeeks Calculator”. */
import React from "react";

// class CalculatorTitle extends React.Component {
// }

// Create Functional Component.
// Takes title as props.value.
const CalculatorTitle = props => {
  return <div className="calculator-title">{props.value}</div>;
};

export default CalculatorTitle;
