interface PaginationProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ page, pageSize, total, onPageChange }: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * pageSize + 1;
  const end = Math.min(safePage * pageSize, total);

  const pages = getPageNumbers(safePage, totalPages);

  if (total === 0) return null;

  return (
    <nav className="pagination" aria-label="페이지">
      <button
        type="button"
        className="pagination-btn"
        disabled={safePage <= 1}
        onClick={() => onPageChange(safePage - 1)}
      >
        ← 이전
      </button>

      <div className="pagination-pages">
        {pages.map((p, i) =>
          p === '…' ? (
            <span key={`ellipsis-${i}`} className="pagination-ellipsis">…</span>
          ) : (
            <button
              key={p}
              type="button"
              className={`pagination-page ${p === safePage ? 'active' : ''}`}
              onClick={() => onPageChange(p)}
            >
              {p}
            </button>
          )
        )}
      </div>

      <button
        type="button"
        className="pagination-btn"
        disabled={safePage >= totalPages}
        onClick={() => onPageChange(safePage + 1)}
      >
        다음 →
      </button>

      <span className="pagination-meta">
        {start}–{end} / {total}개 · {safePage}/{totalPages}페이지
      </span>
    </nav>
  );
}

function getPageNumbers(current: number, total: number): (number | '…')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | '…')[] = [1];
  if (current > 3) pages.push('…');

  const from = Math.max(2, current - 1);
  const to = Math.min(total - 1, current + 1);
  for (let i = from; i <= to; i++) pages.push(i);

  if (current < total - 2) pages.push('…');
  pages.push(total);
  return pages;
}
