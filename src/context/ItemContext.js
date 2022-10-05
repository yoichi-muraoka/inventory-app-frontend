import { createContext, useState } from 'react';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const placeList = [
    {id: 1, name: '総務部'},
    {id: 2, name: '開発部'},
    {id: 3, name: '会議室'}
  ];

  const initialData = [
    {id: 1, name: 'ノートPC', amount: 5, place: {id: 1, name: '総務部'}, note: 'Webカメラ付き', registeredAt: '2022-11-01'},
    {id: 2, name: 'デスクトップPC', amount: 3, place: {id: 2, name: '開発部'}, note: '', registeredAt: '2022-11-02'},
    {id: 3, name: 'ホワイトボード', amount: 1, place: {id: 3, name: '会議室'}, note: '', registeredAt: '2022-11-05'}
  ];

  const [items, setItems] = useState(initialData);

  const addItem = (item) => {
    item.id = (new Date()).getTime();

    setItems([...items, item]);
  };

  return (
    <ItemContext.Provider value={{ placeList, items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
};