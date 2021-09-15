import React from "react";
import "../App.css";
import PropTypes from "prop-types";

const Li = ({ inputText, fn, deleteItem }) => {
  return (
    <div className="list-wrapper">
      <ul className="d-flex flex-column-reverse todo-list">
        {inputText.map((item) => (
          <li
            key={item.id}
            id={item.id}
            className={item.isDone ? "completed" : ""}
          >
            <div>
              <label className="form-check-label">
                <input
                  defaultChecked={item.isDone}
                  onClick={() => {
                    fn(item.id);
                  }}
                  className="checkbox"
                  type="checkbox"
                />
                {item.text}
                <i className="input-helper"></i>
              </label>
            </div>
            <i
              className="remove mdi mdi-close-circle-outline"
              onClick={() => {
                deleteItem(item.id);
              }}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Li;

Li.propTypes = {
  inputText: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      isDone: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
