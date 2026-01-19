import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DotBackground from "./components/dotBG.js";
import Hero from "./components/heroSection.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DotBackground>
      <Hero></Hero>

      <App />
    </DotBackground>
  </StrictMode>
);
