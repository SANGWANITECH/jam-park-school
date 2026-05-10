import SchoolLifeHero from "@/components/school-life/SchoolLifeHero";
import CoCurricular from "@/components/school-life/CoCurricular";
import Sports from "@/components/school-life/Sports";
import ClubsSocieties from "@/components/school-life/ClubsSocieties";
import AdmissionsCTA from "@/components/home/AdmissionsCTA";

export default function SchoolLifePage() {
  return (
    <>
      <SchoolLifeHero />
      <CoCurricular />
      <Sports />
      <ClubsSocieties />
      <AdmissionsCTA />
    </>
  );
}