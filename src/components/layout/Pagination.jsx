import Icon from "../../utils/Icon";

const Pagination = ({ sections, active, onNavigate }) => {
  const prev = sections[active - 2];
  const next = sections[active];

  return (
    <div className="pagination">
      <button
        className="page-btn prev"
        onClick={() => prev && onNavigate(active - 1)}
        disabled={!prev}
      >
        <span className="pb-arrow">←</span>
        {prev ? (
          <span className="pb-stack">
            <span className="pb-eyebrow">ก่อนหน้า</span>
            <span className="pb-row">
              <Icon name={prev.icon} />
              {prev.title}
            </span>
          </span>
        ) : (
          <span className="pb-stack">
            <span className="pb-eyebrow">ก่อนหน้า</span>
          </span>
        )}
      </button>

      <button
        className="page-btn next"
        onClick={() => next && onNavigate(active + 1)}
        disabled={!next}
      >
        {next ? (
          <span className="pb-stack">
            <span className="pb-eyebrow">ถัดไป</span>
            <span className="pb-row">
              {next.title}
              <Icon name={next.icon} />
            </span>
          </span>
        ) : (
          <span className="pb-stack">
            <span className="pb-eyebrow">ถัดไป</span>
          </span>
        )}
        <span className="pb-arrow">→</span>
      </button>
    </div>
  );
};

export default Pagination;
