import { createContext, useState, useEffect } from 'react';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const API_BASE_URL = 'http://localhost:5000';
  const [places, setPlaces] = useState([]);
  const [items, setItems] = useState([]);

  // ページネーション
  const NUM_PER_PAGE = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const getPlaces = async () => {
    const res = await fetch(`${API_BASE_URL}/places`);
    const data = await res.json();
    setPlaces(data);
  };

  const getItems = async () => {
    const res = await fetch(`${API_BASE_URL}/items?_page=${currentPage}&_limit=${NUM_PER_PAGE}`);
    const data = await res.json();
    setItems(data);
    setTotalItems(res.headers.get('X-Total-Count'));
  };

  const addItem = async (item) => {
    await fetch(`${API_BASE_URL}/items`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item)
    });
  };

  useEffect(() => {
    getPlaces();
    getItems();
  }, []);

  useEffect(() => {
    getItems();
  }, [currentPage, addItem]);

  return (
    <ItemContext.Provider value={{ places, items, addItem, NUM_PER_PAGE, currentPage, setCurrentPage, totalItems}}>
      {children}
    </ItemContext.Provider>
  );
};