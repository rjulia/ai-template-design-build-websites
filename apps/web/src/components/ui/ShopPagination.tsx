import './ShopPagination.css';

type ShopPaginationProps = {
  currentPage: number;
  pages: number[];
  nextLabel: string;
};

export function ShopPagination({ currentPage, pages, nextLabel }: ShopPaginationProps) {
  return (
    <nav className="shop-pagination" aria-label="Shop pagination">
      {pages.map((page) => (
        <button key={page} type="button" className={page === currentPage ? 'is-current' : ''}>
          {page}
        </button>
      ))}
      <button type="button" className="shop-pagination-next">
        {nextLabel}
      </button>
    </nav>
  );
}
