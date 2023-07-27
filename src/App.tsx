import AppInner from "./components/AppInner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Discord from "./components/projects/works/Discord";
import Calculator from "./components/projects/works/Calculator";
import TicTacToe from "./components/projects/works/TicTacToe";
import Wordle from "./components/projects/works/Wordle";
import Foobar from "./components/projects/works/Foobar";
import DataStructures from "./components/projects/works/DataStructures";
import { useState } from "react";

export default function App() {
  const [firstPage, setFirstPage] = useState(true);

  return (
    <>
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        {/* <ScrollToElem /> */}
        <Navbar setFirstPage={setFirstPage} />
        <Routes>
          <Route
            path="/"
            element={
              <AppInner firstPage={firstPage} setFirstPage={setFirstPage} />
            }
          />
          <Route path="/projects" element={<Projects maxView={null} />} />
          <Route path="/projects/discord" element={<Discord />} />
          <Route path="/projects/calculator" element={<Calculator />} />
          <Route path="/projects/tictactoe" element={<TicTacToe />} />
          <Route path="/projects/wordle" element={<Wordle />} />
          <Route path="/projects/foobar" element={<Foobar />} />
          <Route path="/projects/dataStructures" element={<DataStructures />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
