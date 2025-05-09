import HeroSection from "@/components/home/Hero";
import Demo from "@/components/home/Demo";
import Pricing from "@/components/home/Pricing";
import CTA from "@/components/home/CTA"
import { currentUser } from "@clerk/nextjs/server";

export default  async function Home() {

  const user = await currentUser()

  
  return (
    <div className="relative w-full">
      
      <HeroSection/>

      {!user ? (
  <>
    <Demo />
    {/* <Pricing /> */}
    <CTA />
  </>
) : null}

      
     
    </div>
  );
}
