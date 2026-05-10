import AboutHero from "@/components/about/AboutHero";
import VisionMission from "@/components/about/VisionMission";
import OurStory from "@/components/about/OurStory";
import CoreValues from "@/components/about/CoreValues";
import Leadership from "@/components/about/Leadership";
import AdmissionsCTA from "@/components/home/AdmissionsCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <VisionMission />
      <OurStory />
      <CoreValues />
      <Leadership />
      <AdmissionsCTA />
    </>
  );
}