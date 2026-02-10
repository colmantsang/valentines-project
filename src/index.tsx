import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Valentines } from "./screens/Valentines";
import { ValentinesYes } from "./screens/ValentinesYes";
import { ValentinesNo } from "./screens/ValentinesNo";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Valentines />} />
        <Route path="/yes" element={<ValentinesYes />} />
        <Route path="/no" element={<ValentinesNo />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
