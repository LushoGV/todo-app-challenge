import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useListContext } from "../context/ListContext";

const List = ({ isCompletedPage }) => {
  const [listContent, setListContent] = useState(null);
  const { items, changeStateItem, removeItem } = useListContext();
  const location = useLocation();

  const filterItems = () => {
    let itemsFiltered;

    if (location.pathname == "/active")
      itemsFiltered = items.filter((element) => element.status == false);
    else if (location.pathname == "/completed")
      itemsFiltered = items.filter((element) => element.status == true);
    else {
      itemsFiltered = items;
      itemsFiltered = itemsFiltered.sort((x, y) => {
        return Number(x.status) === Number(y.status)? 
        0 : Number(x.status)? 
        1 : -1;
      });
    }

    return itemsFiltered;
  };

  useEffect(() => {
    items != null && setListContent(filterItems());
  }, [items]);

  return (
    <section className="w-full py-1 px-2">
      <ul className="w-full flex flex-col">
        {listContent != null &&
          listContent.map((element, index) => {
            return (
              <li 
              className={isCompletedPage ? "flex flex-wrap items-center justify-start py-2" : "flex flex-wrap items-center py-2"}
              key={index}> 
                <input
                  className="hover:cursor-pointer w-6 h-6 mr-1"
                  type="checkbox"
                  checked={element.status == true ? true : false}
                  onChange={() => changeStateItem(element.id)}
                  name=""
                  id=""
                />
                <p className={element.status ? 
                  isCompletedPage ?
                  "line-through font-normal text-xl text-left flex-1 first-letter:uppercase" :
                  "line-through font-normal text-xl first-letter:uppercase" : "font-normal text-xl first-letter:uppercase"}>
                  {element.content}
                </p>
                {isCompletedPage && (
                  <button 
                    className=""
                    onClick={() => removeItem(element.id)}
                  >
                    <span className="material-symbols-outlined text-slate-400">delete</span>
                  </button>
                )}
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default List;
