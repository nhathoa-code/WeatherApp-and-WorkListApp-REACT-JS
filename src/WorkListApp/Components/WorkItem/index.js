import React, { useContext, useEffect, useRef } from "react";
import { WorkListContext } from "../WorkListApp";
import "./index.css";

const WorkItem = ({ Title, Complete, id }) => {
  const { deleteWork, updateWork } = useContext(WorkListContext);
  const workitem = useRef(null);
  const handleDelete = () => {
    workitem.current.classList.add("deleting");
  };

  return (
    <div
      ref={workitem}
      onAnimationEnd={() => {
        deleteWork(id);
      }}
      className={Complete ? "work-item-wrapper complete" : "work-item-wrapper"}
    >
      <div className="work-item">
        <input
          checked={Complete}
          onChange={() => {
            updateWork(id, !Complete);
          }}
          type="checkbox"
        />
        <p>{Title}</p>
        <span onClick={handleDelete} className="material-icons">
          delete_forever
        </span>
      </div>
    </div>
  );
};

export default WorkItem;
