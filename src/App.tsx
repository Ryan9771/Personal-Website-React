import AppInner from "./components/AppInner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppInner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
