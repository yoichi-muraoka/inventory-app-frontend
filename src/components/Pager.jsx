import { useContext } from 'react';
import{ Pagination } from 'react-bootstrap';
import { ItemContext } from '../context/ItemContext';

export default function Pager() {
  const { currentPage, setCurrentPage, totalPages } = useContext(ItemContext);
  
  const startPage = 1;
  const endPage = totalPages;
  
  let paginationItems = [];
  for(let p = startPage; p <= endPage; p++) {
    paginationItems.push(
      <Pagination.Item key={p} active={p === currentPage} onClick={e => setCurrentPage(Number(e.target.innerText))}>
        {p}
      </Pagination.Item>
    );
  }

  return (
    <>
      {paginationItems.length > 1 && (
        <Pagination>
          {paginationItems}
        </Pagination>
      )}
    </>
  );
}