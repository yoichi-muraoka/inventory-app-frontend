import { useContext } from 'react';
import{ Button, Container } from 'react-bootstrap';
import SaveModal from './SaveModal';
import DeleteModal from './DeleteModal';
import ItemTable from './ItemTable';
import Pager from './Pager';
import { ItemContext } from '../context/ItemContext';

export default function Main() {
  const { setShowSaveModal, setEditMode, setEditingItem, defaultItem } = useContext(ItemContext);

  const handleClickAdd = () => {
    setEditMode(false);
    setShowSaveModal(true);
    setEditingItem(defaultItem)
  };

  return (
    <Container>
      <div className="mt-4 mb-3 d-flex justify-content-between">
        <h2 className="">備品リスト</h2>
        <Button variant="primary" onClick={handleClickAdd}>備品の追加</Button>
      </div>
      <ItemTable />
      <Pager />

      {/* 追加・編集・削除モーダル */}
      <SaveModal />
      <DeleteModal />
    </Container>
  );
}