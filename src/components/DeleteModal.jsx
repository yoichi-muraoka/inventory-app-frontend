import { useContext } from 'react';
import{ Modal, Button } from 'react-bootstrap';
import { ItemContext } from '../context/ItemContext';

export default function DeleteModal() {
  const { defaultItem, deleteItem, deletingItem, setDeletingItem, showDeleteModal, setShowDeleteModal } = useContext(ItemContext);

  const handleClose = () => {
    setShowDeleteModal(false);
  };

  const confirmDelete = () => {
    deleteItem(deletingItem);
    setShowDeleteModal(false);
    setDeletingItem(defaultItem);
  };

  return (
    <Modal show={showDeleteModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>以下の備品を削除します。よろしいですか？</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>備品名: {deletingItem.name}</li>
          <li>数量: {deletingItem.amount}</li>
          <li>保管場所: {deletingItem.place.name}</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>キャンセル</Button>
        <Button variant="primary" onClick={confirmDelete}>確定</Button>
      </Modal.Footer>
    </Modal>
  );
}