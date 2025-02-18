import * as React from "react";
import PropTypes from "prop-types";
import Form from "../Form";

const App = ({ message }) => {
  return (
    <div className="env">
      <p className="env-text">{message}</p>
      <Form />
    </div>
  );
};

App.propTypes = {
  message: PropTypes.string,
};

export default App;
