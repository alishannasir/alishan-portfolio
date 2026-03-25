import { createRoot } from "react-dom/client";
import AppWithIntro from "./components/AppWithIntro.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<AppWithIntro />);
