import React from "react";

import Header from "./components/Header.jsx";
import Preloader from "./components/Preloader.jsx";
import NoiseCanvas from "./components/NoiseCanvas.jsx";
import CursorLight from "./components/CursorLight.jsx";
import Hero from "./components/Hero.jsx";
import Ticker from "./components/Ticker.jsx";
import SystemSection from "./components/SystemSection.jsx";
import CasesSection from "./components/CasesSection.jsx";
import StackSection from "./components/StackSection.jsx";
import Manifesto from "./components/Manifesto.jsx";
import RequestSection from "./components/RequestSection.jsx";
import Footer from "./components/Footer.jsx";
import { usePreloader } from "./hooks/usePreloader.js";

export default function App() {
  const { isLoaded, progress } = usePreloader();

  return (
    <>
      <Preloader isLoaded={isLoaded} progress={progress} />
      <NoiseCanvas />
      <CursorLight />
      <Header />
      <main id="top">
        <Hero />
        <Ticker />
        <SystemSection />
        <CasesSection />
        <StackSection />
        <Manifesto />
        <RequestSection />
      </main>
      <Footer />
    </>
  );
}
