import React from "react";
import HeroSection from "../../../components/home/HeroSection";
import Featured from "../../../components/home/Featured";
import OurProducts from "../../../components/home/OurProducts";
import RoomInspirationSlider from "../../../components/home/Banner";
import FuniroFurnitureGallery from "../../../components/home/FurnitutreGallary";

export default function Home() {
  return (
    <> 
      <HeroSection />  
      <Featured/>
      <OurProducts/>
      <RoomInspirationSlider/>
      <FuniroFurnitureGallery/>
    </>
  );
}
