import React from "react";
import ElectricalHero from "../../components/industries/electrical/ElectricalHero";
import ElectricalIndustryOverview from "../../components/industries/electrical/ElectricalIndustryOverview";
import ElectricalMaterials from "../../components/industries/electrical/ElectricalMaterials";
import ElectricalHighMaterials from "../../components/industries/electrical/ElectricalHighMaterials";
import ElectricalPlastics from "../../components/industries/electrical/ElectricalPlastics";
import ElectricalSolutions from "../../components/industries/electrical/ElectricalSolutions";
import ElectricalSolutionRight from "../../components/industries/electrical/ElectricalSolutionRight";
import ElectricalSystem from "../../components/industries/electrical/ElectricalSystem";
import ElectricalElectrical from "../../components/industries/electrical/ElectricalElectrical";
import ElectricalVibration from "../../components/industries/electrical/ElectricalVibration";
import ElectricalElectronics from "../../components/industries/electrical/ElectricalElectronics";
import ElectricalFluoropolymers from "../../components/industries/electrical/ElectricalFluoropolymers";
import RecommendedProducts from "../../components/industries/electrical/RecommendedProducts";
import ElectricalNewsSubscription from "../../components/industries/electrical/ElectricalNewsSubscription";

export default function ElectricalIndustry() {
  return (
    <>

      <ElectricalHero/>
      <ElectricalIndustryOverview/>
      <ElectricalMaterials />
      <ElectricalHighMaterials/>
      <ElectricalPlastics />
      <ElectricalSolutions />
      <ElectricalSolutionRight />
      <ElectricalSystem />
      <ElectricalElectrical />
      <ElectricalVibration />
      <ElectricalElectronics />
      <ElectricalFluoropolymers/>
      <RecommendedProducts/>
      <ElectricalNewsSubscription/>

    </>
  );
}