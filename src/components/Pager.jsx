import{ Pagination } from 'react-bootstrap';

export default function Pager() {
  const currentPage = 1;
  const startPage = 1;
  const endPage = 5;
  
  let paginationItems = [];
  for(let p = startPage; p <= endPage; p++) {
    paginationItems.push(
      <Pagination.Item key={p} active={p === currentPage}>
        {p}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      {paginationItems}
    </Pagination>
  );
}