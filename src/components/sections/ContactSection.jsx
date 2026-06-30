import Icon from "../../utils/Icon";

const CONTACTS = [
  {
    icon: "mail",
    label: "contact@adeehdee.com",
    href: "mailto:contact@adeehdee.com",
  },
  {
    icon: "facebook",
    label: "ADHD to Ability",
    href: "https://www.facebook.com/share/17fuVNPrqZ/?mibextid=wwXIfr",
  },
  {
    icon: "instagram",
    label: "adhd.to.ability",
    href: "https://www.instagram.com/adhd.to.ability/",
  },
];

const ContactSection = () => (
  <section>
    <div className="card-default">
      <div className="section-head">
        <div className="head-icon">
          <Icon name="message-circle" />
        </div>
        <h2>ติดต่อเรา</h2>
      </div>

      <ul className="contact-list">
        {CONTACTS.map((c) => {
          const external = c.href.startsWith("http");
          return (
            <li key={c.href}>
              <a
                className="contact-item"
                href={c.href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="contact-icon">
                  <Icon name={c.icon} />
                </span>
                <span className="contact-label">{c.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default ContactSection;
