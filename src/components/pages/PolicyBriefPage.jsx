import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Download, Heart, Quote, Share2 } from "lucide-react";

import { personas, assetUrl } from "../../data/personas";
import useCopyLink from "../../utils/useCopyLink";

const PDF = "Policy_Brief_ADHD_to_Ability.pdf";
const HEART_KEY = "a2a-brief-hearted";

const TOC = [
  { id: "story", label: "1 · เสียงจากกลุ่มสมาธิสั้น" },
  { id: "people", label: "2 · เรื่องของพวกเขา" },
  { id: "cost-of-waiting", label: "3 · ราคาของการรอ" },
  { id: "gap", label: "4 · ช่องว่างเชิงนโยบาย" },
  { id: "standards", label: "5 · มาตรฐานสากล" },
  { id: "cost", label: "6 · ตอบเรื่องต้นทุน" },
  { id: "recs", label: "7 · ข้อเสนอเชิงนโยบาย", strong: true },
  { id: "conclusion", label: "8 · บทสรุป" },
];

const REFS = [
  "ทวีศิลป์ วิษณุโยธิน และคณะ. ความชุกโรคสมาธิสั้นในประเทศไทย. วารสารสุขภาพจิตแห่งประเทศไทย. 2556;21(2):66-75.",
  "Hoza B, et al. What aspects of peer relationships are impaired in children with ADHD? J Consult Clin Psychol. 2005;73(3):411-23.",
  "Shaw M, et al. A systematic review and analysis of long-term outcomes in ADHD: effects of treatment and non-treatment. BMC Med. 2012;10:99.",
  "Breslau J, et al. Childhood and adolescent onset psychiatric disorders, substance use, and failure to graduate high school on time. J Psychiatr Res. 2011;45(3):295-301.",
  "Trangkasombat U. Clinical characteristics of ADHD in Thai children. J Med Assoc Thai. 2008;91(12):1894-8.",
  "van der Plas NE, et al. Systematic review and meta-analysis: predictors of adult psychiatric outcomes of childhood ADHD. J Am Acad Child Adolesc Psychiatry. 2026;65(2).",
  "Kuriyan AB, et al. Young adult educational and vocational outcomes of children diagnosed with ADHD. J Abnorm Child Psychol. 2013;41(1):27-41.",
  "Young S, et al. A meta-analysis of the prevalence of ADHD in incarcerated populations. Psychol Med. 2015;45(2):247-58.",
  "Barkley RA, Fischer M. Hyperactive child syndrome and estimated life expectancy at young adult follow-up. J Atten Disord. 2019;23(9):907-23.",
  "Wang LJ, et al. Initiation and persistence of pharmacotherapy for youths with ADHD in Taiwan. PLoS One. 2016;11(8):e0161061.",
  "Steele M, et al. A randomized, controlled, effectiveness trial of OROS-methylphenidate compared to usual care with immediate-release methylphenidate. Can J Clin Pharmacol. 2006;13(1):e50-62.",
  "คณะกรรมการพัฒนาระบบยาแห่งชาติ. ประกาศเรื่องบัญชียาหลักแห่งชาติ พ.ศ. 2568.",
  "National Institute for Health and Care Excellence. ADHD: diagnosis and management (NG87). 2018.",
  "Canadian ADHD Resource Alliance. Canadian ADHD practice guidelines. 4th ed. 2018.",
  "Feldman ME, et al. ADHD in children and youth: Part 2: Treatment. Paediatr Child Health. 2018;23(7):462-72.",
  "กลุ่มเงินทุนหมุนเวียนยาเสพติด อย. แผนบริหารจัดการยา methylphenidate. 2569.",
  "Tantivess S, Tangcharoensathien V. Coverage decisions and the court: glucosamine reimbursement in Thailand. Health Syst Reform. 2016;2(2):106-11.",
  "สำนักงานคณะกรรมการอาหารและยา. ประกาศผู้ชนะการเสนอราคา Concerta 36 mg (เลขที่โครงการ 68119205104). 4 ธันวาคม 2568.",
  "คณะกรรมการค่าจ้าง. ประกาศอัตราค่าจ้างขั้นต่ำ (ฉบับที่ 14). 2568.",
  "van der Schans J, et al. Cost-effectiveness of extended-release methylphenidate in children and adolescents with ADHD sub-optimally treated with immediate release methylphenidate. PLoS One. 2015;10(5):e0127237.",
];

// Footnote marker that opens the reference list and jumps to it.
const Ref = ({ n }) => (
  <sup className="fx-ref">
    <a
      href="#refs"
      onClick={() => {
        const d = document.getElementById("refs");
        if (d) d.open = true;
      }}
    >
      {n}
    </a>
  </sup>
);

const Bar = ({ label, pct, strong }) => (
  <div className={"fx-bar" + (strong ? " strong" : "")}>
    <span className="fx-bar-label">{label}</span>
    <div className="fx-bar-track">
      <div style={{ width: `${pct}%` }} />
    </div>
    <span className="fx-bar-val">{pct}%</span>
  </div>
);

const SectionHead = ({ eyebrow, title }) => (
  <>
    <span className="fx-eyebrow">{eyebrow}</span>
    {title && <h2 className="fx-h2">{title}</h2>}
  </>
);

const PolicyBriefPage = () => {
  const { copied, share } = useCopyLink();
  const [hearted, setHearted] = useState(false);

  useEffect(() => {
    try {
      setHearted(localStorage.getItem(HEART_KEY) === "1");
    } catch {
      /* storage unavailable */
    }
  }, []);

  const toggleHeart = () => {
    const next = !hearted;
    setHearted(next);
    try {
      localStorage.setItem(HEART_KEY, next ? "1" : "0");
    } catch {
      /* storage unavailable */
    }
  };

  const phum = personas[0];

  return (
    <div className="fx-stack">
      {/* hero */}
      <section id="brief" className="fx-card fx-card-brand fx-brief-hero">
        <span className="fx-eyebrow">ข้อเสนอเชิงนโยบาย · POLICY BRIEF</span>
        <h1 className="fx-h1">
          ADHD: สิทธิยาที่ดีกว่าเพื่อ<span className="fx-gradient-text">คุณภาพชีวิตที่ดีขึ้น</span>ของเด็กสมาธิสั้น
        </h1>
        <p className="fx-lead">ข้อเสนอให้เด็ก ADHD ไทยทุกสิทธิมีแผนสองในการรักษา</p>
        <div className="fx-callout fx-callout-purple">
          <strong>ข้อเสนอ:</strong> บรรจุ methylphenidate ชนิดออกฤทธิ์นาน (OROS-MPH หรือ Concerta)
          เข้าสู่บัญชียาหลักแห่งชาติ ในฐานะทางเลือกที่สองสำหรับเด็กที่ยาออกฤทธิ์สั้นไม่ตอบโจทย์{" "}
          <strong>ไม่ใช่การแทนที่ยาเดิม</strong>
        </div>
        <div className="fx-hero-meta">
          <span className="fx-muted">
            ทีม อะดี... เฮ็ดดี (A Dee H Dee) · โครงการ ADHD to Ability · ตุลาคม 2569 · อ่านราว 7 นาที
          </span>
          <div className="fx-btn-row">
            <a href={assetUrl(PDF)} download={PDF} className="fx-btn fx-btn-purple">
              <Download aria-hidden="true" /> ดาวน์โหลด PDF
            </a>
            <button
              type="button"
              className="fx-btn fx-btn-outline"
              onClick={() =>
                share("/policy-brief", { title: "Policy Brief · ADHD: สิทธิยาที่ดีกว่า", preferShare: true })
              }
            >
              {copied ? <Check aria-hidden="true" /> : <Share2 aria-hidden="true" />}
              {copied ? "คัดลอกลิงก์แล้ว" : "แชร์"}
            </button>
          </div>
        </div>
      </section>

      <div className="fx-brief-body">
        {/* table of contents */}
        <aside className="fx-toc">
          <span className="fx-eyebrow">ในข้อเสนอนี้</span>
          {TOC.map((t) => (
            <a key={t.id} href={`#${t.id}`} className={t.strong ? "strong" : undefined}>
              {t.label}
            </a>
          ))}
          <a href="#refs" className="muted">
            เอกสารอ้างอิง ({REFS.length})
          </a>
          <div className="fx-toc-quiz">
            <span>ยังไม่ได้เล่น?</span>
            <Link to="/quiz">ลองทาย จริง หรือ เค้ก? 10 ข้อ →</Link>
          </div>
        </aside>

        <main className="fx-brief-main">
          {/* 1 story */}
          <section id="story" className="fx-sec">
            <SectionHead eyebrow="1 · เสียงจากกลุ่มสมาธิสั้น" />
            <div className="fx-card fx-story">
              <div className="fx-story-head">
                <img src={assetUrl(phum.img)} alt="ภาพประกอบน้องภูมิ" className="fx-avatar" />
                <h2>น้องภูมิ อายุ 5 ขวบ เริ่มกิน Ritalin</h2>
              </div>
              <p>
                น้องภูมิเริ่มกินยารักษาโรคสมาธิสั้น (Ritalin) ตั้งแต่อายุ 5 ขวบ ยาช่วยให้เขามีสมาธิได้เพียงช่วงสั้น ๆ
                แต่กลับต้องแลกมาด้วยอาการใจสั่น เวียนหัว คลื่นไส้ ไปจนถึงอาเจียนอย่างรุนแรง
                ฤทธิ์ยายังกดความอยากอาหารจนกินมื้อเที่ยงไม่ลง แล้วไปหิวจัดช่วงดึก ทำให้น้องภูมินอนดึกและได้พักผ่อนเพียงคืนละ
                5–6 ชั่วโมง จนน้ำหนักลดฮวบและร่างกายทรุดโทรม
              </p>
              <p>
                การที่เด็กประถมต้องพกยาไปกินเองที่โรงเรียนทำให้เผลอลืมกินยา เมื่อไม่มีฤทธิ์ยาคอยช่วยก็ยากที่จะโฟกัส
                จนถูกครูตำหนิว่าไม่ตั้งใจเรียน ครั้นจะกินยาระหว่างวัน
                น้องภูมิยังต้องอดทนกับสายตาและการล้อเลียนจากเพื่อนว่าตนเองไม่ปกติ จนบางครั้งก็แอบหยุดยา
                ทำให้การรักษาไม่ต่อเนื่อง
              </p>
              <p>
                ด้วยข้อจำกัดทางเศรษฐกิจของครอบครัวชนชั้นกลางระดับล่าง คุณแม่จึงไม่มีทางเลือก
                ต้องให้ลูกอยู่ร่วมกับยาตัวเดิมและคอยประคับประคองเท่าที่จะไหว ผลกระทบสะสมจนคุณแม่ต้องลาออกจากงานประจำ
              </p>
              <details className="fx-details">
                <summary>อ่านเรื่องของหนึ่งในทีมผู้จัดทำ</summary>
                <p>
                  ตอนอายุ 9–12 ขวบ ครูที่โรงเรียนและครูสอนพิเศษต่างบอกว่าเขาเป็นสมาธิสั้น แต่คำนั้นมาพร้อมความหมายว่า
                  "บ้า" แม่พาไปรักษาและเขาได้เริ่มยา แต่กินอยู่ได้เพียงช่วงสั้น ๆ ก็หยุด ส่วนหนึ่งเพราะผลข้างเคียง
                  อีกส่วนเพราะการไปโรงพยาบาลคือการยอมรับว่าเป็นบ้าจริง และการกินยาต่อหน้าเพื่อนคือสิ่งที่เขาจะไม่มีวันทำ
                  เขาอยู่โดยไม่ได้รักษาจนอายุ 18–19 ปี เมื่อกลับมารักษา Ritalin ทำให้ปวดศีรษะจนใช้ต่อไม่ได้
                  เขาจึงเปลี่ยนเป็นยาออกฤทธิ์นาน และใช้มาจนถึงวันนี้ โดยไม่มีมื้อไหนที่ต้องกินต่อหน้าใคร
                  เขาเสียดายสิบปีที่หายไป
                </p>
              </details>
            </div>
            <div className="fx-pullline">
              สองคน ปัญหาเดียวกัน ปลายทางต่างกัน
              <br />
              เพราะคนหนึ่งมีทางเลือก
            </div>
            <figure className="fx-quote-box">
              <Quote aria-hidden="true" />
              <div>
                <blockquote>
                  "มันไม่ใช่เรื่องของความเรื่องมาก... ในเมื่อ A มันไม่ตอบโจทย์ มันจะเป็น B ได้ไหม
                  มันอาจจะไม่ต้องเป็นท็อปเทียร์ก็ได้"
                </blockquote>
                <figcaption>คุณแม่ปราง ผู้ปกครองของน้องภูมิ</figcaption>
              </div>
            </figure>
          </section>

          {/* 2 people */}
          <section id="people" className="fx-sec">
            <SectionHead eyebrow="2 · เรื่องของพวกเขา" title="เรื่องราวจริง" />
            <p className="fx-body-lg">
              4 เรื่องที่สรุปจากการสัมภาษณ์ผู้ปกครองและผู้ใหญ่ที่มี ADHD ทุกชื่อเป็นนามสมมติ
            </p>
            <div className="fx-people-grid">
              {personas.map((p) => (
                <Link key={p.id} to={`/personas#${p.id}`} className="fx-person-card">
                  <img src={assetUrl(p.img)} alt={p.alt} style={{ objectPosition: p.pos }} />
                  <div>
                    <strong>{p.name}</strong>
                    <span>{p.tagline}</span>
                    <span className="fx-soft-chip">{p.chip}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 3 cost of waiting */}
          <section id="cost-of-waiting" className="fx-sec">
            <SectionHead eyebrow="3 · ทำไม ADHD จึงเร่งด่วน" title="ราคาของการรอ" />
            <p className="fx-body-lg">
              ประเทศไทยมีเด็กวัยประถม (ป.1–5) เป็น ADHD ถึงร้อยละ 8.1 หรือประมาณ 1 ล้านคนทั่วประเทศ
              <Ref n={1} /> แต่เด็กส่วนใหญ่ไม่ได้ถูกมองว่าป่วย มักถูกเหมารวมว่า "ซน ไม่รู้จักคิด ไม่มีวินัย"
              และถูกเลือกปฏิบัติจากครูและเพื่อนร่วมชั้น
            </p>
            <div className="fx-stat-grid">
              <div className="fx-stat">
                <strong>~1 ล้าน</strong>
                <span>
                  เด็ก ป.1–5 ที่เป็น ADHD (8.1%)
                  <Ref n={1} />
                </span>
              </div>
              <div className="fx-stat">
                <strong>52%</strong>
                <span>
                  ถูกเพื่อนปฏิเสธทางสังคม เทียบกับเด็กทั่วไป 14%
                  <Ref n={2} />
                </span>
              </div>
              <div className="fx-stat">
                <strong>74%</strong>
                <span>
                  ของตัวชี้วัดชีวิตแย่กว่าคนทั่วไป เมื่อไม่ได้รับการรักษา
                  <Ref n={3} />
                </span>
              </div>
            </div>

            <div className="fx-card fx-rows">
              <div className="fx-row">
                <span className="fx-row-k">การศึกษา</span>
                <span className="fx-row-v">
                  ไม่จบมัธยมปลายตามกำหนด 33.2% สูงกว่าเด็กทั่วไปกว่า 2 เท่า
                  <Ref n={4} />
                </span>
              </div>
              <div className="fx-row">
                <span className="fx-row-k">สุขภาพจิต</span>
                <span className="fx-row-v">
                  เด็ก ADHD ไทยที่มารับการรักษาพบภาวะจิตเวชอื่นร่วม 53.5%
                  <Ref n={5} /> หากอาการคงอยู่ถึงวัยผู้ใหญ่ เสี่ยงซึมเศร้าสูงขึ้น 3.19 เท่า
                  <Ref n={6} /> และในการสัมภาษณ์ของโครงการ ผู้ใหญ่ 5 ใน 6 คนมีโรคจิตเวชร่วม
                  ระบบพบพวกเขาเมื่อปัญหาลุกลามไปแล้ว
                </span>
              </div>
              <div className="fx-row">
                <span className="fx-row-k">สังคมและอายุขัย</span>
                <span className="fx-row-v">
                  สัมพันธ์กับการถูกเลิกจ้าง
                  <Ref n={7} /> พบในผู้ต้องขังเรือนจำ 26–30%
                  <Ref n={8} /> และอายุขัยคาดเฉลี่ยสั้นลง 6.5–11 ปี
                  <Ref n={9} />
                </span>
              </div>
            </div>

            <div className="fx-callout fx-callout-green">
              <strong>ข่าวดีคือ ADHD รักษาได้</strong> การรักษาช่วยให้ผลลัพธ์ชีวิตดีขึ้นถึง 72%
              <Ref n={3} /> แต่การรักษาจะได้ผลก็ต่อเมื่อเด็กใช้ยาได้ต่อเนื่อง
            </div>

            <div className="fx-card fx-bars">
              <h3>รูปแบบยาไม่ใช่แค่เรื่องความสะดวก</h3>
              <div className="fx-bar-group">
                <span className="fx-bar-caption">
                  ยังรับยาต่อเนื่องเมื่อครบ 1 ปี (เด็กและวัยรุ่นกว่า 112,000 คน ไต้หวัน)
                  <Ref n={10} />
                </span>
                <Bar label="ออกฤทธิ์นาน" pct={61} strong />
                <Bar label="ออกฤทธิ์สั้น" pct={49} />
              </div>
              <div className="fx-bar-group">
                <span className="fx-bar-caption">
                  หายจากอาการภายใน 8 สัปดาห์ (เวชปฏิบัติจริง แคนาดา)
                  <Ref n={11} />
                </span>
                <Bar label="ออกฤทธิ์นาน" pct={44} strong />
                <Bar label="ออกฤทธิ์สั้น" pct={16} />
              </div>
            </div>

            <div className="fx-callout fx-callout-gold fx-why">
              <h3>ทำไมเราจึงเริ่มที่ยา: เพราะไม่อยากให้ถั่วสุกตอนที่งาไหม้</h3>
              <p>
                การดูแลที่ครบถ้วนต้องมีทั้งยา การฝึกผู้ปกครอง การปรับการเรียนการสอน และความเข้าใจจากคนรอบตัว
                ซึ่งโครงการของเราทำควบคู่กันไป แต่ระบบเหล่านั้นต้องใช้เวลาสร้างเป็นสิบหรือยี่สิบปี
                เท่ากับทั้งวัยเรียนของเด็กหนึ่งรุ่น ในบรรดาสิ่งที่เด็กต้องการ ยาคือสิ่งเดียวที่มีอยู่แล้วในประเทศ
                มีหลักฐานชัด และระบบตัดสินใจให้เข้าถึงได้ทันที
              </p>
              <p className="strong">
                การรักษาด้วยยาไม่ได้แทนที่การดูแลด้านอื่น แต่ช่วยให้เด็กทำหน้าที่ในชีวิตประจำวันและการเรียนได้ดีขึ้น
                ระหว่างที่ระบบสนับสนุนด้านอื่นค่อย ๆ พัฒนา
              </p>
            </div>
          </section>

          {/* 4 gap */}
          <section id="gap" className="fx-sec">
            <SectionHead eyebrow="4 · ช่องว่างเชิงนโยบาย" title="ยาหนึ่งตัวสำหรับเด็กทุกคน" />
            <p className="fx-body-lg">
              บัญชียาหลักแห่งชาติบรรจุ methylphenidate ไว้รูปแบบเดียว คือยาเม็ดออกฤทธิ์ทันทีขนาด 10 มก. (Ritalin)
              <Ref n={12} />
            </p>
            <div className="fx-table-wrap">
              <table className="fx-table">
                <thead>
                  <tr>
                    <th scope="col" aria-label="หัวข้อ" />
                    <th scope="col">Ritalin</th>
                    <th scope="col" className="hl">
                      Concerta
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">ออกฤทธิ์</th>
                    <td>3–4 ชั่วโมง (ออกฤทธิ์สั้น)</td>
                    <td className="hl">10–12 ชั่วโมง (ออกฤทธิ์ยาว)</td>
                  </tr>
                  <tr>
                    <th scope="row">กินวันละ</th>
                    <td>2–3 ครั้ง รวมมื้อกลางวันที่โรงเรียน</td>
                    <td className="hl">1 ครั้ง ตอนเช้าที่บ้าน</td>
                  </tr>
                  <tr>
                    <th scope="row">ราคา</th>
                    <td className="good">เบิกได้ด้วยสิทธิ์บัตรทอง</td>
                    <td className="hl bad">จ่ายเอง 3,000-9,000 บาท/เดือน</td>
                  </tr>
                  <tr>
                    <th scope="row">บัญชียาหลักแห่งชาติ</th>
                    <td className="good">อยู่</td>
                    <td className="hl bad">ไม่อยู่</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5 standards */}
          <section id="standards" className="fx-sec">
            <SectionHead eyebrow="5 · มาตรฐานสากล" title="ทางเลือกที่สากลแนะนำ และมีอยู่แล้วในไทย" />
            <div className="fx-stat-grid">
              <div className="fx-card fx-mini">
                <span className="fx-eyebrow">สหราชอาณาจักร · NICE</span>
                <p>
                  แนะนำให้พิจารณายาออกฤทธิ์นานวันละครั้ง เพื่อความสม่ำเสมอ ลดตราบาป และลดการนำยาไปใช้ผิด
                  <Ref n={13} />
                </p>
              </div>
              <div className="fx-card fx-mini">
                <span className="fx-eyebrow">แคนาดา · CADDRA</span>
                <p>
                  จัดยาออกฤทธิ์นานเป็นยาลำดับแรก
                  <Ref n={14} />
                </p>
              </div>
              <div className="fx-card fx-mini">
                <span className="fx-eyebrow">สมาคมกุมารแพทย์แคนาดา</span>
                <p>
                  ระบุว่าเป็นทางเลือกแรกสำหรับเด็กส่วนใหญ่
                  <Ref n={15} />
                </p>
              </div>
            </div>
            <p className="fx-body-lg">
              ในประเทศไทย ยาออกฤทธิ์นานมีจำหน่ายอยู่แล้วหลายชนิด และ อย. เป็นผู้จัดซื้อและกระจายยาเอง
              <Ref n={16} /> สิทธิข้าราชการเบิกยานอกบัญชียาหลักได้ภายใต้เงื่อนไข
              <Ref n={17} />{" "}
              <strong className="fx-ink">
                สิ่งที่ยังขาดมีเพียงอย่างเดียว คือการบรรจุเข้าบัญชียาหลักแห่งชาติ
              </strong>{" "}
              เพื่อให้แพทย์เลือกตามอาการของเด็กได้ ไม่ว่าเด็กจะใช้สิทธิใด
            </p>
          </section>

          {/* 6 cost */}
          <section id="cost" className="fx-sec">
            <SectionHead eyebrow="6 · ตอบข้อโต้แย้งเรื่องต้นทุน" title="ควบคุมงบประมาณได้สามทาง" />
            <div className="fx-stat-grid">
              <div className="fx-card fx-cost">
                <span className="fx-cost-k">1 · ราคาจัดซื้อภาครัฐ</span>
                <strong>
                  ~2,553 บาท<small>/เดือน</small>
                </strong>
                <p>
                  Concerta 36 มก. ราว 85 บาท/เม็ด
                  <Ref n={18} /> ต่ำกว่าที่ครอบครัวจ่ายเองราวพันบาท (3,570 บาท
                  เท่ากับค่าแรงขั้นต่ำกรุงเทพฯ เกือบ 9 วัน
                  <Ref n={19} />)
                </p>
              </div>
              <div className="fx-card fx-cost">
                <span className="fx-cost-k">2 · ข้อบ่งชี้เฉพาะกลุ่ม</span>
                <strong>ทางเลือกที่สอง</strong>
                <p>ใช้เฉพาะเด็กที่ยาออกฤทธิ์สั้นไม่ตอบโจทย์ จึงจำกัดจำนวนผู้ใช้</p>
              </div>
              <div className="fx-card fx-cost">
                <span className="fx-cost-k">3 · ต้นทุนรวมของสังคม</span>
                <strong>160,000–205,000 บาท</strong>
                <p>
                  ประหยัดได้ต่อคนใน 10 ปี (4,200–5,400 ยูโร) จากการวิเคราะห์ในเนเธอร์แลนด์
                  <Ref n={20} />
                </p>
              </div>
            </div>
          </section>

          {/* 7 recommendations */}
          <section id="recs" className="fx-sec">
            <SectionHead eyebrow="7 · ข้อเสนอเชิงนโยบาย" title="3 ข้อเสนอ ถึง 3 หน่วยงาน" />
            <ol className="fx-recs">
              <li className="fx-card fx-card-brand">
                <span className="fx-rec-num">1</span>
                <div>
                  <strong>คณะอนุกรรมการพัฒนาบัญชียาหลักแห่งชาติ</strong>
                  <p>
                    พิจารณาบรรจุ methylphenidate ชนิดออกฤทธิ์นาน โดยเฉพาะ OROS-MPH ซึ่งมีหลักฐานมากที่สุด
                    เป็นทางเลือกที่สองสำหรับเด็กและวัยรุ่นที่ (ก) มีผลข้างเคียงจากยาออกฤทธิ์สั้นจนใช้ต่อไม่ได้ (ข)
                    มีปัญหาความสม่ำเสมอ โดยเฉพาะมื้อกลางวันที่โรงเรียน หรือ (ค) ยาหมดฤทธิ์ระหว่างวัน
                  </p>
                </div>
              </li>
              <li className="fx-card fx-card-brand">
                <span className="fx-rec-num">2</span>
                <div>
                  <strong>สปสช. และหน่วยงานจัดซื้อยา</strong>
                  <p>
                    ใช้กลไกจัดซื้อรวมระดับประเทศ และวางแผนสำรองยา เนื่องจากยากลุ่มนี้ขาดคราวเป็นช่วง ๆ ในปี 2568–2569
                    <Ref n={16} />
                  </p>
                </div>
              </li>
              <li className="fx-card fx-card-brand">
                <span className="fx-rec-num">3</span>
                <div>
                  <strong>HITAP ร่วมกับ สปสช.</strong>
                  <p>จัดทำการวิเคราะห์ต้นทุน-ประสิทธิผลและผลกระทบด้านงบประมาณในบริบทไทย</p>
                </div>
              </li>
            </ol>
          </section>

          {/* 8 conclusion */}
          <section id="conclusion" className="fx-card fx-card-glow fx-conclusion">
            <span className="fx-eyebrow">8 · บทสรุป</span>
            <h2 className="fx-h2">ไม่มีครอบครัวไหนควรต้องเลือกแบบนี้</h2>
            <p>เมื่อถามคุณแม่ปรางว่าถ้าเบิกยาได้ ชีวิตจะเปลี่ยนไปอย่างไร เธอไม่ได้พูดถึงเงินเป็นอย่างแรก</p>
            <blockquote>"แม่ไม่ต้องคอยสแตนด์บายตลอดเวลาแล้ว... สามารถทำงานได้แบบหมดห่วง"</blockquote>
            <p>
              เด็กไทยไม่ควรต้องเลือกระหว่าง "การรักษา" กับ "การศึกษา" และพ่อแม่ไม่ควรต้องเลือกระหว่าง "ดูแลลูก" กับ
              "การทำงาน" ทางเลือกที่สองไม่ใช่การเพิ่มยาที่แพงกว่า แต่เป็นการให้การตัดสินใจทางการแพทย์ขึ้นกับอาการของเด็ก
            </p>
            <div className="fx-btn-row center">
              <button
                type="button"
                className={"fx-btn fx-btn-gold fx-btn-lg fx-heart-btn" + (hearted ? " on" : "")}
                onClick={toggleHeart}
                aria-pressed={hearted}
              >
                <span className="fx-heart-wrap">
                  <Heart aria-hidden="true" className={hearted ? "fx-heart-pop" : undefined} />
                  {hearted && (
                    <>
                      <Heart aria-hidden="true" className="fx-heart-fly" />
                      <Heart aria-hidden="true" className="fx-heart-fly f2" />
                      <Heart aria-hidden="true" className="fx-heart-fly f3" />
                    </>
                  )}
                </span>
                ร่วมสนับสนุนให้ Concerta เข้าบัญชียาหลัก
              </button>
              <Link to="/quiz" className="fx-btn fx-btn-outline fx-btn-lg">
                ทดสอบความรู้เท่าทัน ADHD
              </Link>
            </div>
          </section>

          {/* source + credits */}
          <section className="fx-credits">
            <div>
              <strong>ที่มาของข้อมูล</strong>
              การทบทวนวรรณกรรม และการสัมภาษณ์ผู้ปกครองเด็ก ADHD 4 คน และผู้ใหญ่ที่มี ADHD ในปี 2569
              โดยชื่อทั้งหมดเป็นนามสมมติ
            </div>
            <div>
              <strong>ผู้เขียน</strong>
              ธนะพัฒน์ ภิญโญ, ภัทธนัน เตชะเสน, โฮอิง ชิน
              <strong className="mt">ที่ปรึกษา</strong>
              รศ.ดร.ธีรพัฒน์ อังศุชวาล (มหาวิทยาลัยมหิดล / TIMS)
            </div>
            <div>
              <strong>การสนับสนุน</strong>
              โครงการ Young Policy Makers #2 ร่วมกับมูลนิธิเข้าถึงเอดส์ ภายใต้การสนับสนุนของ สสส.
              <Link to="/contact" className="mt-link">
                ติดต่อเรา
              </Link>
            </div>
          </section>

          {/* references */}
          <details id="refs" className="fx-card fx-refs">
            <summary>เอกสารอ้างอิง ({REFS.length})</summary>
            <ol>
              {REFS.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ol>
          </details>

          <Link to="/quiz" className="fx-text-link fx-center">
            ลองทาย จริง หรือ เค้ก? 10 ข้อ <ArrowRight aria-hidden="true" />
          </Link>
        </main>
      </div>
    </div>
  );
};

export default PolicyBriefPage;
