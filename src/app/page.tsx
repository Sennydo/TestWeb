import Image from "next/image";
import Navbar from "@/components/navbar"
import Hero from "@/components/hero";
import Offering from "@/components/offersection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offering />
    </div>
  );
}
