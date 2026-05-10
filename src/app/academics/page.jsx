import AcademicsHero from "@/components/academics/AcademicsHero";
import CurriculumOverview from "@/components/academics/CurriculumOverview";
import SubjectsSection from "@/components/academics/SubjectsSection";
import AcademicCalendar from "@/components/academics/AcademicCalendar";  
import AdmissionsCTA from "@/components/home/AdmissionsCTA";

export default function AcademicsPage() {
  return (
    <>
      <AcademicsHero />
      <CurriculumOverview />
      <SubjectsSection />
      <AcademicCalendar /> 
       <AdmissionsCTA />
    </>
  );
}