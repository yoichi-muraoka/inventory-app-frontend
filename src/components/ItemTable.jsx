import { useContext } from 'react';
import { Table, Button } from 'react-bootstrap';
import { DateTimeFormatter, LocalDate } from '@js-joda/core';
import { ItemContext } from '../context/ItemContext';

export default function ItemTable() {
  const { items, setDeletingItem, setShowDeleteModal } = useContext(ItemContext);

  // 日付のフォーマット
  const formatter = DateTimeFormatter.ofPattern('yyyy年MM月dd日');
  const formatDate = (stringDate) => {
    const localDate = LocalDate.parse(stringDate);
    return formatter.format(localDate);
  };

  // 削除ボタン押下時
  const handleClickDelete = (item) => {
    setShowDeleteModal(true);
    setDeletingItem(item);
  };

  return (
    <Table bordered hover className="bg-white">
        <thead className='bg-dark text-white'>
          <tr>
            <th>備品ID</th>
            <th>備品名</th>
            <th>数量</th>
            <th>保管場所</th>
            <th>備考</th>
            <th>登録日</th>
            <th colSpan={2}>操作</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{item.place.name}</td>
              <td>{item.note}</td>
              <td>{formatDate(item.registeredAt)}</td>
              <td><Button variant="warning">編集</Button></td>
              <td><Button variant="danger" onClick={() => handleClickDelete(item)}>削除</Button></td>
            </tr>
          ))}
        </tbody>
    </Table>
  );
}