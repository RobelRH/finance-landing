import HeroSection from "@/components/hero";
import MyGrid from "@/components/mygrid";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MyGrid />
    </div>
  );
}
