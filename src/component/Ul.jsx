import React from "react";
import Li from "./Li";
import InputButton from "./InputButton";
import PropTypes from "prop-types";

export default function Ul() {
  const [input, setInput] = React.useState(
    JSON.parse(localStorage.getItem("data")) || []

    // [{ text: "Buy some Suger", isDone: true, id: 0 }]
  );
  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(input));
  }, [input]);

  const [value, setValue] = React.useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }
  function addTodo() {
    value
      ? setInput([
          ...input,
          { text: value, isDone: false, id: Math.random()*100058000000 },
        ])
      : false;
    setValue("");
    
  }

  const checkedItem = (number) => {
    const newInput = [...input];

    newInput.filter((i) => {
      if (i.id === number) {
        i.isDone = !i.isDone;
      }
    });

    setInput(newInput);
  };

  function deleteItem(number) {
    const newInput = [...input];
    const filterArr = newInput.filter((val) => {
      return val.id !== number;
    });
    console.log(filterArr);
    setInput(filterArr);
  }

  // function deleteItem(params) {
  //   const newInput = [...input]
  //   newInput.splice(params,1)
  //   setInput(newInput)
  // }

  function keyPress(e) {
    e.key === "Enter" ? addTodo() : undefined;
  }

  return (
    <>
      <InputButton
        value={value}
        handleChange={handleChange}
        keyPress={keyPress}
        addTodo={addTodo}
      />
      <Li inputText={input} fn={checkedItem} deleteItem={deleteItem} />
    </>
  );
}
