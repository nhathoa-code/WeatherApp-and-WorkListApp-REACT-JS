import React, { useContext } from "react";
import "./index.css";
import WorkItem from "../WorkItem";
import { WorkListContext } from "../WorkListApp";

const WorkList = () => {
  const { workList, loading } = useContext(WorkListContext);
  if (loading) {
    return (
      <div className="worklist">
        <div className="loadingio-spinner-rolling-qghuvney4js">
          <div className="ldio-wpkcf6gpidl">
            <div></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="worklist">
        {workList.length !== 0 ? (
          workList.map((work) => <WorkItem key={work.id} {...work} />)
        ) : (
          <h1
            style={{
              textAlign: "center",
              marginTop: "5rem",
              fontWeight: "normal",
            }}
          >
            Empty Work List
          </h1>
        )}
      </div>
    </>
  );
};

export default WorkList;
