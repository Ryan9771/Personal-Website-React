import AppInner from "./components/AppInner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AppInner />} />
          <Route path="/projects" element={<Projects maxView={null} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
