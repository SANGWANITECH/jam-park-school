import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import About from "@/components/home/About";
import Pillars from "@/components/home/Pillars";
import Academics from "@/components/home/Academics";
import WhyUs from "@/components/home/WhyUs";
import SchoolLife from "@/components/home/SchoolLife";
import AdmissionsCTA from "@/components/home/AdmissionsCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <Pillars />
      <Academics />
      <WhyUs />
      <SchoolLife />
      <AdmissionsCTA />
    </>
  );
}