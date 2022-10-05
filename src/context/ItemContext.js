import { createContext, useState, useEffect } from 'react';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const placeList = [
    {id: 1, name: '総務部'},
    {id: 2, name: '開発部'},
    {id: 3, name: '会議室'}
  ];

  const API_BASE_URL = 'http://localhost:5000';

  const [items, setItems] = useState([]);

  const getItems = async () => {
    const res = await fetch(`${API_BASE_URL}/itemList`);
    const data = await res.json();
    setItems(data);
  };

  const addItem = async (item) => {
    const res = await fetch(`${API_BASE_URL}/itemList`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item)
    });

    const data = await res.json();

    setItems([...items, data]);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <ItemContext.Provider value={{ placeList, items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
};