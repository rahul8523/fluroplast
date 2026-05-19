import React from "react";




import MedicalHero from "../../components/industries/medical/MedicalHero";
import MedicalOverview from "../../components/industries/medical/MedicalOverview";
import MedicalMaterials from "../../components/industries/medical/MedicalMaterials";
// import MedicalPerformance from "../../components/industries/medical/MedicalPerformance";
// import MedicalPlastics from "../../components/industries/medical/MedicalPlastics";
import MedicalSolutions from "../../components/industries/medical/MedicalSolutions";
import MedicalSolutionRight from "../../components/industries/medical/MedicalSolutionRight";
import MedicalSystem from "../../components/industries/medical/MedicalSystem";
import MedicalElectrical from "../../components/industries/medical/MedicalElectrical";
import MedicalVibration from "../../components/industries/medical/MedicalVibration";
import MedicalElectronics from "../../components/industries/medical/MedicalElectronics";
import MedicalFluoropolymers from "../../components/industries/medical/MedicalFluoropolymers";
import RecommendedProducts from "../../components/industries/medical/RecommendedProducts";
import NewsletterSubscription from "../../components/industries/common/NewsletterSubscription";

export default function AutomobileIndustry() {
  return (
    <>

      <MedicalHero />
      <MedicalOverview />
      <MedicalMaterials />
      {/* <MedicalPerformance /> */}
      {/* <MedicalPlastics /> */}
      <MedicalSolutions />
      <MedicalSolutionRight />
      <MedicalSystem />
      <MedicalElectrical />
      <MedicalVibration />
      <MedicalElectronics />
      <MedicalFluoropolymers/>
      <RecommendedProducts/>
      <NewsletterSubscription/>

    </>
  );
}