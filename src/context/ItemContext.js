import { createContext, useState, useEffect } from 'react';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const API_BASE_URL = 'http://localhost:5000';

  const [places, setPlaces] = useState([]);
  const [items, setItems] = useState([]);

  const getPlaces = async () => {
    const res = await fetch(`${API_BASE_URL}/placeList`);
    const data = await res.json();
    setPlaces(data);
  };

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
    getPlaces();
    getItems();
  }, []);

  return (
    <ItemContext.Provider value={{ places, items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
};