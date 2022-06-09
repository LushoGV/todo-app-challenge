import React from "react";
import List from "../components/List";
import { useListContext } from "../context/ListContext";

const Completed = () => {
  const { removeAllCompleted } = useListContext();

  return (
    <>
      <List isCompletedPage={true} />
      <button 
        className="bg-red-500 w-32 h-11 text-white flex flex-wrap justify-center items-center text-sm rounded-md" 
        onClick={removeAllCompleted}
      >
        <span className="material-symbols-outlined text-lg mr-1">delete</span>
        delete all
      </button>
    </>
  );
};

export default Completed;
