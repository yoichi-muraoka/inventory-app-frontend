import { useContext, useState } from 'react';
import{ Form, Button } from 'react-bootstrap';
import { LocalDate } from '@js-joda/core';
import { ItemContext } from '../context/ItemContext';

export default function ItemForm() {
  const { placeList, addItem } = useContext(ItemContext);

  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [name, setName] = useState('');
  const [amount, setAmount] = useState(1);
  const [placeId, setPlaceId] = useState(1);
  const [note, setNote] = useState('');

  const getPlaceById = (placeId) => {
    for(let place of placeList){
      if(place.id === placeId) return place;
    }
  };

  // フォームをデフォルト状態に戻す
  const clearForm = () => {
    setName('');
    setAmount(1);
    setPlaceId(1);
    setNote('');
    setSubmitDisabled(true);
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

  // 送信ボタン押下時の処理
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      name: name,
      amount: amount,
      place: getPlaceById(placeId),
      registeredAt: LocalDate.now().toString(),
      note: note
    };

    addItem(item);
    clearForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
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
          {placeList.map(place => (
            <option key={place.id} value={place.id}>{place.name}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>備考</Form.Label>
        <Form.Control type="text" value={note} onChange={e => setNote(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={submitDisabled}>送信</Button>
    </Form>
  );
}