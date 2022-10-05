import{ Table, Button } from 'react-bootstrap';

export default function ItemTable() {
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
          <tr>
            <td>1</td>
            <td>ノートパソコン</td>
            <td>5</td>
            <td>総務部</td>
            <td></td>
            <td>2022年11月10日</td>
            <td><Button variant="warning">編集</Button></td>
            <td><Button variant="danger">削除</Button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>ノートパソコン</td>
            <td>5</td>
            <td>総務部</td>
            <td></td>
            <td>2022年11月10日</td>
            <td><Button variant="warning">編集</Button></td>
            <td><Button variant="danger">削除</Button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>ノートパソコン</td>
            <td>5</td>
            <td>総務部</td>
            <td></td>
            <td>2022年11月10日</td>
            <td><Button variant="warning">編集</Button></td>
            <td><Button variant="danger">削除</Button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>ノートパソコン</td>
            <td>5</td>
            <td>総務部</td>
            <td></td>
            <td>2022年11月10日</td>
            <td><Button variant="warning">編集</Button></td>
            <td><Button variant="danger">削除</Button></td>
          </tr>
          <tr>
            <td>5</td>
            <td>ノートパソコン</td>
            <td>5</td>
            <td>総務部</td>
            <td></td>
            <td>2022年11月10日</td>
            <td><Button variant="warning">編集</Button></td>
            <td><Button variant="danger">削除</Button></td>
          </tr>
        </tbody>
    </Table>
  );
}