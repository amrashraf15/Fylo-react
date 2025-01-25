import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/HeroSection";
import StayProductive from "@/components/StayProductive";
import Testimonials from "@/components/Testimonials";



export default function Home() {
  return (
    <div >
      <HeroSection/>
      <Features/>
      <StayProductive/>
      <Testimonials/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}
