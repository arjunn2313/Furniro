import React from "react";
import HeroSection from "../../../components/home/HeroSection";
import Featured from "../../../components/home/Featured";
import OurProducts from "../../../components/home/OurProducts";

export default function Home() {
  return (
    <> 
      <HeroSection />  
      <Featured/>
      <OurProducts/>
    </>
  );
}
