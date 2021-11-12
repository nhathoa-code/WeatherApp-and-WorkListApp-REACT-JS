import React, { useContext } from "react";
import { WorkListContext } from "../WorkListApp";
import "./index.css";

const Footer = () => {
  const { workList, loading } = useContext(WorkListContext);
  const completeTasks = () => {
    const value = workList.reduce((finalValue, element) => {
      if (element.Complete) {
        return finalValue + 1;
      }
      return finalValue;
    }, 0);
    return value;
  };
  const openTasks = () => {
    const value = workList.reduce((finalValue, element) => {
      if (!element.Complete) {
        return finalValue + 1;
      }
      return finalValue;
    }, 0);
    return value;
  };
  return (
    <footer>
      <span>{workList.length} tasks</span>
      <span>{completeTasks()} complete</span>
      <span>{openTasks()} open</span>
    </footer>
  );
};

export default Footer;
