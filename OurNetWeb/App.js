import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavBar from "./src/components/header/navbar/js/navbar";
import ErrorScreen from "./src/screens/ErrScreen/js/ErrorScreen";
import MainScreen from "./src/screens/MainScreen/js/MainScreen";
import AgendaScreen from "./src/screens/AgendaScreen/js/AgendaScreen";
import MyFooter from "./src/components/footer/js/myfooter";
import ScrollToTop from "./src/components/back2top/js/back2top";
import SportScreen from "./src/screens/SportScreen/js/SportScreen";
import EconomyScreen from "./src/screens/EconomyScreen/js/EconomyScreen";

export default function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div
        className="App container-fluid p-0 m-0"
        id={load ? "no-scroll" : "scroll"}
      >
        {/* HEADER */}
        <header>
          <MyNavBar />
        </header>
        {/* HEADER END */}

        <Routes>
          <Route path="/" element={<MainScreen pageTitle="Ana Sayfa" />} />
          <Route path="/gündem" element={<AgendaScreen pageTitle="Gündem" />} />
          <Route path="/spor" element={<SportScreen pageTitle="Spor" />} />
          <Route
            path="/ekonomi"
            element={<EconomyScreen pageTitle="Ekonomi" />}
          />
          <Route path="*" element={<ErrorScreen pageTitle="HATA" />} />
        </Routes>

        {/* FOOTER */}
        <MyFooter />
        {/* FOOTER END */}
      </div>
      <ScrollToTop />
    </Router>
  );
}
