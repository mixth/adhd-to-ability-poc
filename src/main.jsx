import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./styles/tokens.css";
import "./styles/styles.css";
import "./styles/features.css";

export const createRoot = ViteReactSSG({ routes });
