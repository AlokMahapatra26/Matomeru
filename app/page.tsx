import HeroSection from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Demo from "@/components/home/Demo";
import Pricing from "@/components/home/Pricing";
import CTA from "@/components/home/CTA"

export default function Home() {
  return (
    <div className="relative w-full">
      
      <HeroSection/>
      <Demo/>
      <Pricing/>
      <CTA/>
      
     
    </div>
  );
}
