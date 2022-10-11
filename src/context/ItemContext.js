import { createContext, useState, useEffect } from 'react';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const API_BASE_URL = 'http://localhost:8080/api';
  const [places, setPlaces] = useState([]);
  const [items, setItems] = useState([]);

  // ページネーション
  const NUM_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // 追加・編集・削除モーダル
  const defaultItem = {id: 0, name: '', amount: 1, place: {id: 1, name: '総務部'}, note: '', registeredAt: ''};
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingItem, setEditingItem] = useState(defaultItem);
  const [deletingItem, setDeletingItem] = useState(defaultItem);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const getPlaces = async () => {
    const res = await fetch(`${API_BASE_URL}/places`);
    const data = await res.json();
    setPlaces(data);
  };

  // 備品のCRUD処理
  const getItems = async () => {
    const res = await fetch(`${API_BASE_URL}/items?_page=${currentPage}&_limit=${NUM_PER_PAGE}`);
    const data = await res.json();
    setItems(data);
    setTotalItems(res.headers.get('x-total-count'));
  };

  const addItem = async (item) => {
    await fetch(`${API_BASE_URL}/items`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item)
    });
    getItems();
  };

  const editItem = async (item) => {
    await fetch(`${API_BASE_URL}/items/${item.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item)
    });
    getItems();
  };

  const deleteItem = async (item) => {
    await fetch(`${API_BASE_URL}/items/${item.id}`, {
      method: 'DELETE'
    });
    getItems();
  };

  useEffect(() => {
    getPlaces();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getItems();

    // eslint-disable-next-line
  }, [currentPage, totalItems]);

  useEffect(() => {
    const total = Math.ceil(totalItems / NUM_PER_PAGE);
    setTotalPages(total);

    if(currentPage !== 1 && total < currentPage) {
      setCurrentPage(total);
    }

    // eslint-disable-next-line
  }, [totalItems]);

  return (
    <ItemContext.Provider
    value={{
      places, items, defaultItem,
      addItem, editItem, showSaveModal, setShowSaveModal,
      editMode, setEditMode, editingItem, setEditingItem,
      deleteItem, deletingItem, setDeletingItem, showDeleteModal,
      currentPage, setCurrentPage, totalPages, setShowDeleteModal,
    }}>
      {children}
    </ItemContext.Provider>
  );
};