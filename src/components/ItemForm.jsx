import{ Form, Button } from 'react-bootstrap';

export default function ItemForm() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>備品名</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>数量</Form.Label>
        <Form.Control type="number" min="1" max="99" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>保管場所</Form.Label>
        <Form.Select>
          <option value="1">総務部</option>
          <option value="2">開発部</option>
          <option value="3">会議室</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">送信</Button>
    </Form>
  );
}