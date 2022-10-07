import { useContext } from 'react';
import{ Button, Container } from 'react-bootstrap';
import SaveModal from './SaveModal';
import DeleteModal from './DeleteModal';
import ItemTable from './ItemTable';
import Pager from './Pager';
import { ItemContext } from '../context/ItemContext';

export default function Main() {
  const { setShowSaveModal } = useContext(ItemContext);

  const handleOnClickAdd = () => {
    setShowSaveModal(true);
  };

  return (
    <Container>
      <div className="mt-4 mb-3 d-flex justify-content-between">
        <h2 className="">備品リスト</h2>
        <Button variant="primary" onClick={handleOnClickAdd}>備品の追加</Button>
      </div>
      <ItemTable />
      <Pager />

      {/* 追加・編集・削除モーダル */}
      <SaveModal />
      <DeleteModal />
    </Container>
  );
}