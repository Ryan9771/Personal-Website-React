import AppInner from "./components/AppInner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppInner />} />
          <Route path="/projects" element={<Projects maxView={null} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
