import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { personas, assetUrl } from "../../data/personas";

const PersonasPage = () => (
  <div className="fx-stack">
    <section className="fx-intro">
      <span className="fx-eyebrow">เรื่องของพวกเขา · PERSONAS</span>
      <h1 className="fx-h1">
        เรื่องราว<span className="fx-gradient-text">จริง</span>
      </h1>
      <p className="fx-lead">4 เรื่องราวที่สรุปจากการสัมภาษณ์ผู้ปกครองเด็ก ADHD และผู้ใหญ่ที่มี ADHD</p>
      <div className="fx-person-chips">
        {personas.map((p) => (
          <a key={p.id} href={`#${p.id}`} className="fx-person-chip">
            <img src={assetUrl(p.img)} alt="" />
            <span>{p.name}</span>
          </a>
        ))}
      </div>
    </section>

    {personas.map((p) => (
      <article key={p.id} id={p.id} className="fx-persona">
        <div className="fx-persona-side">
          <img src={assetUrl(p.img)} alt={p.alt} className="fx-persona-img" />
          <div>
            <h2 className="fx-persona-name">{p.name}</h2>
            <p className="fx-persona-tag">{p.tagline}</p>
          </div>
          <dl className="fx-facts">
            {p.facts.map((f) => (
              <div key={f.k} className="fx-fact-row">
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="fx-persona-body">
          <div>
            <h3>ภูมิหลัง</h3>
            <p>{p.bg}</p>
          </div>
          <div>
            <h3>ทัศนคติ ค่านิยม และความเชื่อ</h3>
            <p>{p.att}</p>
          </div>
          <div>
            <h3>แรงจูงใจในการใช้ชีวิต</h3>
            <p>{p.mot}</p>
          </div>
          <figure className="fx-voice">
            <h3>เสียงสะท้อน</h3>
            <blockquote>"{p.quote}"</blockquote>
          </figure>
        </div>
      </article>
    ))}

    <section className="fx-cta-band">
      <div>
        <h2>ทางเลือกที่สอง เปลี่ยนชีวิตคนเหล่านี้ได้</h2>
        <p>ทำไมเราถึงเสนอให้ Concerta เข้าบัญชียาหลักแห่งชาติ</p>
      </div>
      <Link to="/policy-brief" className="fx-btn fx-btn-gold fx-btn-lg">
        อ่านข้อเสนอนโยบาย <ArrowRight aria-hidden="true" />
      </Link>
    </section>
  </div>
);

export default PersonasPage;
