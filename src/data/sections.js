export const sections = [
  { id: 1, title: "ชื่อทีม", icon: "users", slug: "" },
  { id: 2, title: "ชื่อโครงการ", icon: "clipboard-list", slug: "project-name" },
  { id: 3, title: "ความเป็นมาและเหตุผล", icon: "book-open", slug: "background" },
  { id: 4, title: "กรอบแนวคิด", icon: "git-branch", slug: "framework" },
  { id: 5, title: "วัตถุประสงค์", icon: "check-circle-2", slug: "objectives" },
  { id: 6, title: "เป้าประสงค์ระยะยาว", icon: "target", slug: "long-term-goals" },
  { id: 7, title: "ติดต่อเรา", icon: "message-circle", slug: "contact" },
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
