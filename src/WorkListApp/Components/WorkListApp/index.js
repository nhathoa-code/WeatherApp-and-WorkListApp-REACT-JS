import React, { useEffect, useState } from "react";
import "./index.css";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import app from "../../../firebase";
import Form from "../Form";
import WorkList from "../WorkList";
import Footer from "../Footer";
export const WorkListContext = React.createContext();

const WorkListApp = () => {
  const [workList, setWorkList] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore(app);
  const worksCol = collection(db, "works");
  const getWorks = async () => {
    const workSnapshot = await getDocs(worksCol);
    const workslist = workSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setWorkList(workslist);
    setLoading(false);
  };
  const addWork = async (work) => {
    const workDoc = await addDoc(worksCol, work);
    setWorkList([{ ...work, id: workDoc.id }, ...workList]);
  };
  const updateWork = async (id, value) => {
    console.log(value);
    const newWorkList = workList.map((ele) => {
      if (ele.id === id) {
        return { ...ele, Complete: value };
      } else {
        return ele;
      }
    });
    setWorkList(newWorkList);
    const workDoc = doc(db, "works", id);
    const newValue = { Complete: value };
    await updateDoc(workDoc, newValue);
  };
  const deleteWork = (id) => {
    const workDoc = doc(db, "works", id);
    deleteDoc(workDoc);
    const newWorkList = workList.filter((ele) => ele.id !== id);
    setWorkList(newWorkList);
  };
  useEffect(() => {
    getWorks();
  }, []);
  return (
    <>
      <WorkListContext.Provider
        value={{ addWork, deleteWork, updateWork, workList, loading }}
      >
        <div id="app-container">
          <Form />
          <WorkList />
        </div>
        {!loading && <Footer />}
      </WorkListContext.Provider>
    </>
  );
};

export default WorkListApp;
