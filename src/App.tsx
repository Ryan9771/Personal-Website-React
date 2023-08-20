import AppInner from "./components/AppInner";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Discord from "./components/projects/works/Discord";
import Calculator from "./components/projects/works/Calculator";
import TicTacToe from "./components/projects/works/TicTacToe";
import Wordle from "./components/projects/works/Wordle";
import Foobar from "./components/projects/works/Foobar";
import DataStructures from "./components/projects/works/DataStructures";
import Ecommute from "./components/projects/works/Ecommute";
import Wacc from "./components/projects/works/Wacc";
import Pintos from "./components/projects/works/Pintos";
import FoodBuddy from "./components/projects/works/FoodBuddy";
import PersonalWebsite from "./components/projects/works/PersonalWebsite";
import Dmi from "./components/dmi/Dmi";
import Temp from "./components/temp/Temp";

export default function App() {
  const [firstPage, setFirstPage] = useState(true);

  return (
    <>
      <HashRouter>
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
          <Route path="/projects/ecommute" element={<Ecommute />} />
          <Route path="/projects/wacc" element={<Wacc />} />
          <Route path="/projects/pintos" element={<Pintos />} />
          <Route path="/projects/foodBuddy" element={<FoodBuddy />} />
          <Route
            path="/projects/personalWebsite"
            element={<PersonalWebsite />}
          />
          <Route path="/dmi" element={<Dmi />} />
          <Route path="/themes/cottage" element={<Temp />} />
          <Route
            path="*"
            element={
              <AppInner firstPage={firstPage} setFirstPage={setFirstPage} />
            }
          />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}
