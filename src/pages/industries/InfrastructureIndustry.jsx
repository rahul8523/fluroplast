import React from "react";

import InfrastructureHero from "../../components/industries/infrastructure/InfrastructureHero";
import InfrastructureOverview from "../../components/industries/infrastructure/InfrastructureOverview";
import InfrastructureMaterials from "../../components/industries/infrastructure/InfrastructureMaterials";


import InfrastructureSolutions from "../../components/industries/infrastructure/InfrastructureSolutions";
import InfrastructureSolutionRight from "../../components/industries/infrastructure/InfrastructureSolutionRight";
import InfrastructureSystem from "../../components/industries/infrastructure/InfrastructureSystem";
import InfrastructureElectrical from "../../components/industries/infrastructure/InfrastructureElectrical";
import InfrastructureVibration from "../../components/industries/infrastructure/InfrastructureVibration";
import InfrastructureFluoropolymers from "../../components/industries/infrastructure/InfrastructureFluoropolymers";
import RecommendedProducts from "../../components/industries/infrastructure/RecommendedProducts";
import NewsletterSubscription from "../../components/industries/common/NewsletterSubscription";

export default function InfrastructureIndustry() {
  return (
    <>


      <InfrastructureHero/>
      <InfrastructureOverview />
      <InfrastructureMaterials />

      <InfrastructureSolutions />
      <InfrastructureSolutionRight />
      <InfrastructureSystem />
      <InfrastructureElectrical />
      <InfrastructureVibration />

      <InfrastructureFluoropolymers/>
      <RecommendedProducts/>
      <NewsletterSubscription/>




    </>
  );
}