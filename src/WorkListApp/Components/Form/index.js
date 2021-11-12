import React, { useContext, useState } from "react";
import { WorkListContext } from "../WorkListApp";
import "./index.css";

const Form = () => {
  const [title, setTitle] = useState("");
  const { addWork, workList } = useContext(WorkListContext);
  const focusHandler = () => {
    let form = document.querySelector("form");
    form.classList.remove("blur");
    form.classList.add("focus");
  };
  const blurHandler = () => {
    let form = document.querySelector("form");
    form.classList.add("blur");
    form.classList.remove("focus");
  };

  return (
    <>
      <form
        onAnimationEnd={(e) => {
          e.target.classList.remove("error");
        }}
        onSubmit={(e) => {
          e.preventDefault();
          if (title.trim().length == "") {
            e.target.classList.add("error");
            return;
          }
          const duplicatework = workList.find(
            (ele) => title.toLowerCase() == ele.Title.toLowerCase()
          );
          if (duplicatework) {
            e.target.classList.add("error");
            return;
          }
          addWork({ Title: title, Complete: false });
          setTitle("");
        }}
      >
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onFocus={focusHandler}
          onBlur={blurHandler}
          type="text"
          placeholder="Add task..."
        />
        <span className="material-icons">edit_note</span>
      </form>
    </>
  );
};

export default Form;
