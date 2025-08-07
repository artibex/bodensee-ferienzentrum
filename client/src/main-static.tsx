import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StaticApp from "@/components/static/StaticApp";
import "./index.css";

// Static entry point for GitHub Pages
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StaticApp />
  </StrictMode>,
);