

import React from "react";
import CarouselSection from "./components/CarouselSection";
import ChatbotModel from "./components/ChatbotModel";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ChatbotModel />
      <StatsSection />
      <CarouselSection />
    </>
  );
}

export default App;
