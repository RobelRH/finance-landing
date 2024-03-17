import HeroSection from "@/components/hero";
import MyGrid from "@/components/mygrid";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MyGrid />
    </div>
  );
}
