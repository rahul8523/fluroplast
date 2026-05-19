import React from "react";
import NewsletterSubscription from "../../components/industries/common/NewsletterSubscription";
import FoodHero from "../../components/industries/food/FoodHero";
import FoodOverview from "../../components/industries/food/FoodOverview";
import FoodMaterials from "../../components/industries/food/FoodMaterials";


import FoodSolutions from "../../components/industries/food/FoodSolutions";
import FoodSolutionRight from "../../components/industries/food/FoodSolutionRight";
import FoodSystem from "../../components/industries/food/FoodSystem";
import FoodElectrical from "../../components/industries/food/FoodElectrical";
import FoodVibration from "../../components/industries/food/FoodVibration";
import FoodElectronics from "../../components/industries/food/FoodElectronics";
import FoodFluoropolymers from "../../components/industries/food/FoodFluoropolymers";
import RecommendedProducts from "../../components/industries/food/RecommendedProducts";




export default function FoodIndustry() {
  return (
    <>

      <FoodHero/>
      <FoodOverview />
      <FoodMaterials />
      {/* <FoodPerformance/> */}
      {/* <FoodPlastics/> */}
      <FoodSolutions />
      <FoodSolutionRight />
      <FoodSystem />
      <FoodElectrical />
      <FoodVibration />
      <FoodElectronics />
      <FoodFluoropolymers/>
      <RecommendedProducts/>
      <NewsletterSubscription/>

    </>
  );
}