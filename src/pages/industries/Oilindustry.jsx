import React from "react";




import OilHero from "../../components/industries/oil/OilHero";
import OilOverview from "../../components/industries/oil/OilOverview";
import OilMaterials from "../../components/industries/oil/OilMaterials";
// import OilPerformance from "../../components/industries/oil/OilPerformance";
// import OilPlastics from "../../components/industries/oil/OilPlastics";
import OilSolutions from "../../components/industries/oil/OilSolutions";
import OilSolutionRight from "../../components/industries/oil/OilSolutionRight";
import OilSystem from "../../components/industries/oil/OilSystem";
import OilElectrical from "../../components/industries/oil/OilElectrical";
import OilVibration from "../../components/industries/oil/OilVibration";
import OilElectronics from "../../components/industries/oil/OilElectronics";
import OilFluoropolymers from "../../components/industries/oil/OilFluoropolymers";
import RecommendedProducts from "../../components/industries/oil/RecommendedProducts";
import NewsletterSubscription from "../../components/industries/common/NewsletterSubscription";

export default function AutomobileIndustry() {
  return (
    <>


      <OilHero />
      <OilOverview />
      <OilMaterials />
      {/* <OilPerformance /> */}
      {/* <OilPlastics /> */}
      <OilSolutions />
      <OilSolutionRight />
      <OilSystem />
      <OilElectrical />
      <OilVibration />
      <OilElectronics />
      <OilFluoropolymers/>
      <RecommendedProducts/>
      <NewsletterSubscription/>




    </>
  );
}