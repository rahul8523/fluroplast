import React from "react";
import ChemicalIndustryHero from "../../components/industries/chemical/ChemicalIndustryHero";
import ChemicalIndustryOverview from "../../components/industries/chemical/ChemicalIndustryOverview";
import ChemicalMaterials from "../../components/industries/chemical/ChemicalMaterials";

import ChemicalSolutions from "../../components/industries/chemical/ChemicalSolutions";
import ChemicalSolutionRight from "../../components/industries/chemical/ChemicalSolutionRight";
import ChemicalHydraulicSystem from "../../components/industries/chemical/ChemicalHydraulicSystem";
import ChemicalElectrical from "../../components/industries/chemical/ChemicalElectrical";
import ChemicalNoiseVibration from "../../components/industries/chemical/ChemicalNoiseVibration";

import ChemicalFluoropolymers from "../../components/industries/chemical/ChemicalFluoropolymers";
import RecommendedProducts from "../../components/industries/common/RecommendedProducts";
import ChemicalNewsSubscription from "../../components/industries/chemical/ChemicalNewsSubscription";



export default function ChemicalIndustry() {
  return (
    <>

      <ChemicalIndustryHero/>
      <ChemicalIndustryOverview/>
      <ChemicalMaterials/>

      <ChemicalSolutions/>
      <ChemicalSolutionRight/>
      <ChemicalHydraulicSystem/>
      <ChemicalElectrical/>
      <ChemicalNoiseVibration/>
    
      <ChemicalFluoropolymers/>
      <RecommendedProducts/>
      <ChemicalNewsSubscription/>

    </>
  );
}