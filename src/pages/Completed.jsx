import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import List from "../components/List";
import { useListContext } from "../context/ListContext";

const Completed = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const { items, removeAllCompleted } = useListContext();

  const checkList = () => {
    let isCheck = items.filter((element) => {
      if (element.status == true) return true;
      else return false;
    });
    setIsEmpty(isCheck);
  };

  useEffect(() => {
    items != null && checkList();
  }, [items]);

  return (
    <>
      <List isCompletedPage={true} />
      {isEmpty.length !== 0 && (
        <button
          className="hover:bg-red-600 bg-red-500 w-32 h-11 text-white flex flex-wrap justify-center items-center text-sm rounded-md"
          onClick={removeAllCompleted}
        >
          <span className="material-symbols-outlined text-lg mr-1">delete</span>
          delete all
        </button>
      )}
    </>
  );
};

export default Completed;
