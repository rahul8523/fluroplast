import React from "react";


import LabwareHero from "../../components/industries/labware/LabwareHero";
import LabwareOverview from "../../components/industries/labware/LabwareOverview";

import LabwareSolutions from "../../components/industries/labware/LabwareSolutions";
import LabwareSolutionRight from "../../components/industries/labware/LabwareSolutionRight";
import LabwareSystem from "../../components/industries/labware/LabwareSystem";
import LabwareElectrical from "../../components/industries/labware/LabwareElectrical";
import LabwareVibration from "../../components/industries/labware/LabwareVibration";
import LabwareElectronics from "../../components/industries/labware/LabwareElectronics";
import LabwareFluoropolymers from "../../components/industries/labware/LabwareFluoropolymers";
import RecommendedProducts from "../../components/industries/labware/RecommendedProducts";
import NewsletterSubscription from "../../components/industries/common/NewsletterSubscription";

export default function LabwareIndustry() {
  return (
    <>


      <LabwareHero />
      <LabwareOverview />

      <LabwareSolutions />
      <LabwareSolutionRight />
      <LabwareSystem />
      <LabwareElectrical />
      <LabwareVibration />
      <LabwareElectronics />
      <LabwareFluoropolymers/>
      <RecommendedProducts/>
      <NewsletterSubscription/>




    </>
  );
}