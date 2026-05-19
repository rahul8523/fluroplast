import React from "react";




import IrrigationHero from "../../components/industries/irrigation/IrrigationHero";
import IrrigationOverview from "../../components/industries/irrigation/IrrigationOverview";
import IrrigationMaterials from "../../components/industries/irrigation/IrrigationMaterials";

import IrrigationSolutions from "../../components/industries/irrigation/IrrigationSolutions";
import IrrigationSolutionRight from "../../components/industries/irrigation/IrrigationSolutionRight";
import IrrigationSystem from "../../components/industries/irrigation/IrrigationSystem";
import IrrigationElectrical from "../../components/industries/irrigation/IrrigationElectrical";
import IrrigationVibration from "../../components/industries/irrigation/IrrigationVibration";
import IrrigationElectronics from "../../components/industries/irrigation/IrrigationElectronics";
import IrrigationFluoropolymers from "../../components/industries/irrigation/IrrigationFluoropolymers";
import RecommendedProducts from "../../components/industries/irrigation/RecommendedProducts";
import NewsletterSubscription from "../../components/industries/common/NewsletterSubscription";

export default function IrrigationIndustry() {
  return (
    <>


      <IrrigationHero />
      <IrrigationOverview />
      <IrrigationMaterials />

      <IrrigationSolutions />
      <IrrigationSolutionRight />
      <IrrigationSystem />
      <IrrigationElectrical />
      <IrrigationVibration />
      <IrrigationElectronics />
      <IrrigationFluoropolymers/>
      <RecommendedProducts/>
      <NewsletterSubscription/>

    </>
  );
}