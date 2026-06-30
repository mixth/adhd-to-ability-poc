import {
  AlertTriangle,
  ArrowRight,
  Baby,
  BookOpen,
  BookOpenText,
  Book,
  Brain,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  FileText,
  GitBranch,
  Handshake,
  Heart,
  Hospital,
  Mail,
  Megaphone,
  MessageCircle,
  PartyPopper,
  Pill,
  RefreshCw,
  Rocket,
  School,
  Search,
  Smartphone,
  Sparkles,
  Tag,
  Target,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

// lucide-react dropped its brand glyphs, so define Facebook and Instagram
// locally following lucide's SVG conventions (24x24, currentColor stroke).
const lucideProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const Facebook = (props) => (
  <svg {...lucideProps} {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props) => (
  <svg {...lucideProps} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const REGISTRY = {
  "alert-triangle": AlertTriangle,
  "arrow-right": ArrowRight,
  baby: Baby,
  "book-open": BookOpen,
  "book-open-text": BookOpenText,
  book: Book,
  brain: Brain,
  calendar: Calendar,
  "check-circle-2": CheckCircle2,
  "chevron-down": ChevronDown,
  "clipboard-list": ClipboardList,
  facebook: Facebook,
  "file-text": FileText,
  "git-branch": GitBranch,
  handshake: Handshake,
  heart: Heart,
  hospital: Hospital,
  instagram: Instagram,
  mail: Mail,
  megaphone: Megaphone,
  "message-circle": MessageCircle,
  "party-popper": PartyPopper,
  pill: Pill,
  "refresh-cw": RefreshCw,
  rocket: Rocket,
  school: School,
  search: Search,
  smartphone: Smartphone,
  sparkles: Sparkles,
  tag: Tag,
  target: Target,
  "trending-up": TrendingUp,
  users: Users,
  wallet: Wallet,
};

const Icon = ({ name, ...props }) => {
  const Component = REGISTRY[name];
  if (!Component) return null;
  return <Component {...props} />;
};

export default Icon;
