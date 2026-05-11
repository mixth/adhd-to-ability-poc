import Icon from "../../../utils/Icon";

const FlowchartDiagram = ({ onOpenOverlay }) => (
  <div className="flowchart-wrap">
    <h3 className="flowchart-title">แผนผังการขับเคลื่อน</h3>
    <div className="flowchart">
      <div className="flow-node problem">
        <div className="fn-icon">
          <Icon name="alert-triangle" />
        </div>
        <div className="fn-title">PROBLEM</div>
        <div className="fn-sub">ปัญหา ADHD</div>
      </div>
      <div className="flow-arrow">
        <Icon name="arrow-right" />
      </div>
      <div className="flow-stack">
        <div className="flow-node purple">
          <div className="fn-icon">
            <Icon name="target" />
          </div>
          <div className="fn-title">Policy Push</div>
          <div className="fn-sub">ผลักดันนโยบาย</div>
        </div>
        <div className="flow-node gold">
          <div className="fn-icon">
            <Icon name="megaphone" />
          </div>
          <div className="fn-title">Social Campaign</div>
          <div className="fn-sub">สร้างกระแสสังคม</div>
        </div>
      </div>
      <div className="flow-arrow">
        <Icon name="arrow-right" />
      </div>
      <div
        className="flow-node policy clickable"
        onClick={() => onOpenOverlay("concerta")}
      >
        <div className="fn-icon">
          <Icon name="pill" />
        </div>
        <div className="fn-title">Concerta</div>
        <div className="fn-sub">→ บัญชียาหลัก</div>
      </div>
      <div className="flow-arrow">
        <Icon name="arrow-right" />
      </div>
      <div
        className="flow-node result clickable"
        onClick={() => onOpenOverlay("benefits")}
      >
        <div className="fn-icon">
          <Icon name="check-circle-2" />
        </div>
        <div className="fn-title">สิทธิประโยชน์</div>
        <div className="fn-sub">
          ในระบบประกันสุขภาพ
          <br />
          ถ้วนหน้าของประเทศ
        </div>
        <div className="flow-tap">กดเพื่อดูรายละเอียด</div>
      </div>
    </div>
  </div>
);

export default FlowchartDiagram;
