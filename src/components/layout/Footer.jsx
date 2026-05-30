const SPONSORS = [
  { src: "aids-access.jpg", alt: "AIDS Access Foundation" },
  { src: "ypm.jpg", alt: "Young Policy Makers #2" },
  { src: "thai-health-fund.jpg", alt: "สสส." },
];

const Footer = () => (
  <footer className="a2a-footer">
    <div className="sponsor-label">สนับสนุนโดย</div>
    <div className="sponsors">
      {SPONSORS.map((s) => (
        <img
          key={s.src}
          src={`${import.meta.env.BASE_URL}assets/${s.src}`}
          alt={s.alt}
        />
      ))}
    </div>
    <div className="footer-meta">
      โครงการ ADHD to Ability © 2569 | Young Policy Makers #2
      <div className="team">ทีม A Dee H Dee</div>
    </div>
  </footer>
);

export default Footer;
