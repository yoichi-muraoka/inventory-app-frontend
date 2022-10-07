import { useContext, useState } from 'react';
import{ Form, Button } from 'react-bootstrap';
import { LocalDate } from '@js-joda/core';
import { ItemContext } from '../context/ItemContext';

export default function ItemForm() {
  const { places, addItem, setShowSaveModal, editMode, editItem, editingItem, defaultItem } = useContext(ItemContext);

  const [submitDisabled, setSubmitDisabled] = useState(!editMode);

  const [id, setId] = useState(editingItem.id);
  const [name, setName] = useState(editingItem.name);
  const [amount, setAmount] = useState(editingItem.amount);
  const [placeId, setPlaceId] = useState(editingItem.place.id);
  const [note, setNote] = useState(editingItem.note);

  const getPlaceById = (placeId) => {
    for(let place of places){
      if(place.id === placeId) return place;
    }
  };

  // フォームをデフォルト状態に戻す
  const clearForm = () => {
    setId(defaultItem.id);
    setName(defaultItem.name);
    setAmount(defaultItem.amount);
    setPlaceId(defaultItem.place.id);
    setNote(defaultItem.note);
    setSubmitDisabled(true);
    setShowSaveModal(false);
  };

  // リアルタイム・バリデーション
  const handleNameChange = (e) => {
    const name = e.target.value;
    setName(name);
    if(name.length > 0) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };

  // 保存ボタン押下時の処理
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      id: id,
      name: name,
      amount: amount,
      place: getPlaceById(placeId),
      registeredAt: LocalDate.now().toString(),
      note: note
    };

    editMode ? editItem(item) : addItem(item);
    clearForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input type="hidden" value={id} />
      <Form.Group className="mb-3">
        <Form.Label>備品名</Form.Label>
        <Form.Control type="text" value={name} onChange={handleNameChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>数量</Form.Label>
        <Form.Control type="number" min="1" max="99" value={amount} onChange={e => setAmount(Number(e.target.value))} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>保管場所</Form.Label>
        <Form.Select value={placeId} onChange={e => setPlaceId(Number(e.target.value))}>
          {places.map(place => (
            <option key={place.id} value={place.id}>{place.name}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>備考</Form.Label>
        <Form.Control type="text" value={note} onChange={e => setNote(e.target.value)} />
      </Form.Group>
      <div className="text-end">
        <Button variant="secondary" onClick={() => setShowSaveModal(false)}>キャンセル</Button>
        <Button className="ms-2" variant="primary" type="submit" disabled={submitDisabled}>保存</Button>
      </div>
    </Form>
  );
}