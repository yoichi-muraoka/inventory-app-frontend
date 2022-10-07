import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import ItemForm from "./ItemForm";
import { ItemContext } from '../context/ItemContext';

export default function SaveModal() {
  const { showSaveModal, setShowSaveModal, editMode } = useContext(ItemContext);

  const handleClose = () => {
    setShowSaveModal(false);
  };

  return (
    <Modal show={showSaveModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>備品の{editMode ? '編集' :  '追加'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ItemForm />
      </Modal.Body>
    </Modal>
  );
}