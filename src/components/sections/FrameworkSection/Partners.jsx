import Icon from "../../../utils/Icon";
import { partners } from "../../../data/partners";

const Partners = () => (
  <div className="fw-partners">
    <h3>
      <Icon name="handshake" /> แนวร่วมหลัก
    </h3>
    <div className="partner-chips">
      {partners.map((p) => (
        <span key={p.name} className="partner-chip" data-tooltip={p.desc}>
          {p.name}
        </span>
      ))}
    </div>
    <div className="submit-note">
      <strong>นำเสนอต่อ:</strong> คณะอนุกรรมการ NLEM • กระทรวงสาธารณสุข • กรมสุขภาพจิต • กระทรวงศึกษาธิการ
    </div>
  </div>
);

export default Partners;
