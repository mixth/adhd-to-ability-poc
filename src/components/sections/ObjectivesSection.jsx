import Icon from "../../utils/Icon";
import { objectives } from "../../data/objectives";

const ObjectivesSection = () => (
  <section>
    <div className="card-default">
      <div className="section-head">
        <div className="head-icon">
          <Icon name="check-circle-2" />
        </div>
        <h2>วัตถุประสงค์ของโครงการ</h2>
      </div>

      <div className="obj-stack">
        {objectives.map((o) => (
          <div className="obj-card" key={o.id}>
            <div className="obj-head">
              <div className="obj-num">{o.id}</div>
              <div>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </div>
            </div>
            <div className="obj-cols">
              <div className="obj-col">
                <div className="obj-col-head">
                  <Icon name="calendar" /> ผลลัพธ์ระยะสั้น (ก.พ.-ต.ค. 2569)
                </div>
                <ul>
                  {o.shortTerm.map((t) => (
                    <li key={t}>
                      <span className="dot"></span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="obj-col">
                <div className="obj-col-head gold">
                  <Icon name="rocket" /> ผลลัพธ์ระยะยาว
                </div>
                <ul>
                  {o.longTerm.map((t) => (
                    <li key={t}>
                      <span className="dot dot-gold"></span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ObjectivesSection;
