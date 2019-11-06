/* This Component will be for all of the text shown on the screen. */
import React from "react";
import OutputScreenRow from "./outputScreenRow.js";

// Class Component.
// Use to hold two Screen Rows.
class OutputScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="screen">
        <OutputScreenRow value={this.props.question} />
        <OutputScreenRow value={this.props.answer} />
      </div>
    );
  }
}

export default OutputScreen;
