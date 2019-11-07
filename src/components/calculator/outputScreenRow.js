/*This component will be for the type of output, i.e. input text and calculated result. */
import React from "react";

// Class Component.
// Used to show Question/Answer.
class OutputScreenRow extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="screen-row">
        <input type="text" readOnly value={this.props.value} />
      </div>
    );
  }
}
export default OutputScreenRow;
