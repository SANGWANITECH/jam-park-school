import AdmissionsHero from "@/components/admissions/AdmissionsHero";
import HowToApply from "@/components/admissions/HowToApply";
import EntryRequirements from "@/components/admissions/EntryRequirements";
import FeesStructure from "@/components/admissions/FeesStructure";
import AdmissionsCTA from "@/components/home/AdmissionsCTA";

export default function AdmissionsPage() {
  return (
    <>
      <AdmissionsHero />
      <HowToApply />
      <EntryRequirements />
      <FeesStructure />
      <AdmissionsCTA />
    </>
  );
}