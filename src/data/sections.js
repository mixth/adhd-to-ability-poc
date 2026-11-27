// The five main tabs, in menu and pagination order. `short` is the label
// shown under the icon on phones. `featured` marks the gold policy-brief
// tab, which opens the brief's own page (outside the main layout).
export const sections = [
  { id: 1, title: "เกี่ยวกับเรา", short: "เกี่ยวกับเรา", icon: "users", slug: "" },
  { id: 2, title: "ความเป็นมาและเหตุผล", short: "ความเป็นมา", icon: "book-open", slug: "background" },
  { id: 3, title: "ข้อเสนอนโยบาย", short: "ข้อเสนอฯ", icon: "file-text", slug: "policy-brief", featured: true },
  { id: 4, title: "เป้าประสงค์ระยะยาว", short: "เป้าประสงค์", icon: "target", slug: "long-term-goals" },
  { id: 5, title: "ติดต่อเรา", short: "ติดต่อเรา", icon: "message-circle", slug: "contact" },
];

// Build an absolute route path from a section slug ("" → "/").
export const sectionPath = (slug) => (slug ? `/${slug}` : "/");

export const teamMembers = [
  {
    name: "ภัทธนัน เตชะเสน",
    nickname: "นัจจี้",
    title: "นางสาว",
    photo: "member1.jpg",
  },
  {
    name: "ธนะพัฒน์ ภิญโญ",
    nickname: "เจอาร์",
    title: "นาย",
    photo: "member2.jpg",
  },
  {
    name: "โฮอิง ชิน",
    nickname: "โฮอิง",
    title: "นางสาว",
    photo: "member3.PNG",
  },
];
