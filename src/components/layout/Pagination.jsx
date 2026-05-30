import { Link } from "react-router-dom";
import Icon from "../../utils/Icon";
import { sectionPath } from "../../data/sections";

const Pagination = ({ sections, active }) => {
  const prev = sections[active - 2];
  const next = sections[active];

  return (
    <div className="pagination">
      {prev ? (
        <Link className="page-btn prev" to={sectionPath(prev.slug)}>
          <span className="pb-arrow">←</span>
          <span className="pb-stack">
            <span className="pb-eyebrow">ก่อนหน้า</span>
            <span className="pb-row">
              <Icon name={prev.icon} />
              {prev.title}
            </span>
          </span>
        </Link>
      ) : (
        <span className="page-btn prev" aria-disabled="true">
          <span className="pb-arrow">←</span>
          <span className="pb-stack">
            <span className="pb-eyebrow">ก่อนหน้า</span>
          </span>
        </span>
      )}

      {next ? (
        <Link className="page-btn next" to={sectionPath(next.slug)}>
          <span className="pb-stack">
            <span className="pb-eyebrow">ถัดไป</span>
            <span className="pb-row">
              {next.title}
              <Icon name={next.icon} />
            </span>
          </span>
          <span className="pb-arrow">→</span>
        </Link>
      ) : (
        <span className="page-btn next" aria-disabled="true">
          <span className="pb-stack">
            <span className="pb-eyebrow">ถัดไป</span>
          </span>
          <span className="pb-arrow">→</span>
        </span>
      )}
    </div>
  );
};

export default Pagination;
