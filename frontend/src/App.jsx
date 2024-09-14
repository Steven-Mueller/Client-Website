import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Willkommen from "./pages/Willkommen";
import Referenzen from "./pages/Referenzen";
import Social_Media from "./pages/Social_Media";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Pnf from "./pages/Pnf";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Willkommen />} />
        <Route path="/references" element={<Referenzen />} />
        <Route path="/social" element={<Social_Media />} />
        <Route path="/contact" element={<Kontakt />} />
        <Route path="/impress" element={<Impressum />} />
        <Route path="*" element={<Pnf />} />
      </Route>
    </Routes>
  );
}
