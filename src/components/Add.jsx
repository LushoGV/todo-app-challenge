import React, { useEffect, useRef } from "react";
import { useListContext } from "../context/ListContext";

const Add = () => {
  const inputRef = useRef();
  const { addItem } = useListContext();

  const checkInputContent = (e) => {
    e.preventDefault();
    inputRef.current.value != "" && addItem(inputRef.current.value.trim());
    inputRef.current.value = "";
  };

  return (
    <form className="w-full h-24 flex justify-evenly py-4 px-1">
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="add details"
        className="w-4/5 p-4 border border-slate-300 rounded-2xl"
      />
      <button 
        className="first-letter:uppercase w-32 bg-blue-600 rounded-xl text-white ml-2"
        onClick={(e) => checkInputContent(e)}
      >
        add
      </button>
    </form>
  );
};

export default Add;
