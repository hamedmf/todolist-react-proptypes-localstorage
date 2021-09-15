import React from "react";
import PropTypes from "prop-types";
export default function InputButton({
  value,
  handleChange,
  keyPress,
  addTodo,
}) {
  return (
    <div className="add-items d-flex">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyPress={keyPress}
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
      />
      <button
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
        onClick={addTodo}
      >
        Add
      </button>{" "}
    </div>
  );
}
InputButton.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  addTodo: PropTypes.func,
  keyPress: PropTypes.func,
};
