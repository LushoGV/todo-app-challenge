import React, { createContext, useContext, useEffect, useState } from "react";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [items, setItems] = useState(null);

  const checkLStorage = () => { //Testeo si hay info en el LocalStorage, si hay, la traigo, sino guardo un array vacio con key 'data'
    if (localStorage.data) {
      let dataSeved = localStorage.getItem("data");
      dataSeved = JSON.parse(dataSeved);
      setItems(dataSeved);
    } else localStorage.setItem("data", []);
  };

  const handleLStorage = (newData) => {//Actualizo la informacion del LocalStorage
    let newDataJSON = JSON.stringify(newData);
    localStorage.setItem("data", newDataJSON);
  };

  const addItem = (newContent) => {//Paso el contenido del input a un objeto, le agrego id, su status (si está completado) y lo guardo en el Items state
    let newItem = {
      id: Math.random().toString(36).substring(2) + Date.now().toString(36),
      content: newContent,
      status: false,
    };

    let arrayViejo = items;

    if (arrayViejo == null) arrayViejo = [newItem];
    else arrayViejo = arrayViejo.concat(newItem);

    setItems(arrayViejo);
  };

  const changeStateItem = (id) => {
    let listArray = items;
    let item = listArray.find((element) => element.id == id);

    listArray = listArray.filter((element) => element.id != id);
    item.status = !item.status;
    listArray = listArray.concat(item);

    setItems(listArray);
  };

  const removeItem = (id) => {
    setItems((list) => list.filter((element) => element.id != id));
  };

  const removeAllCompleted = () => {
    setItems((list) => list.filter((element) => element.status == false));
  };

  const ListContent = {
    items,
    addItem,
    removeItem,
    removeAllCompleted,
    changeStateItem,
    checkLStorage,
  };

  useEffect(() => {
    checkLStorage();
  }, []);

  useEffect(() => {
    if (items == null) localStorage.setItem("data", []);
    else handleLStorage(items);
  }, [items]);

  return (
    <ListContext.Provider value={ListContent}>{children}</ListContext.Provider>
  );
};


export const useListContext = () => {
  const { items, addItem, removeItem, changeStateItem, removeAllCompleted } = useContext(ListContext);

  return { items, addItem, removeItem, changeStateItem, removeAllCompleted };
};
