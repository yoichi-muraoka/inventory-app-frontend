import{ Container } from 'react-bootstrap';
import DeleteModal from './DeleteModal';
import ItemForm from './ItemForm';
import ItemTable from './ItemTable';
import Pager from './Pager';

export default function Main() {
  return (
    <Container>
      <h2 className="mt-4 mb-3">備品リスト</h2>
      <ItemTable />
      <Pager />

      <h2 className="mt-4 mb-3">備品追加</h2>
      <ItemForm />

      {/* 削除モーダル */}
      <DeleteModal />
    </Container>
  );
}