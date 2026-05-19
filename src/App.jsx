import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMMON COMPONENTS
import Header from "./components/header";
import Footer from "./components/footer";

// PAGES
import Home from "./pages/Home";

// INDUSTRY PAGES
import AutomobileIndustry from "./pages/industries/AutomobileIndustry";
import ChemicalIndustry from "./pages/industries/ChemicalIndustry";
import ElectricalIndustry from "./pages/industries/ElectricalIndustry";
import FoodIndustry from "./pages/industries/FoodIndustry";
import InfrastructureIndustry from "./pages/industries/InfrastructureIndustry";
import IrrigationIndustry from "./pages/industries/IrrigationIndustry";
import LabwareIndustry from "./pages/industries/LabwareIndustry";
import Oilindustry from "./pages/industries/Oilindustry";
import MedicalIndustry from "./pages/industries/MedicalIndustry";

const App = () => {
  return (
    <BrowserRouter>

      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main>

        <Routes>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* INDUSTRY PAGES */}
          <Route
            path="/automobile-industry"
            element={<AutomobileIndustry />}
          />

          <Route
            path="/chemical-industry"
            element={<ChemicalIndustry />}
          />

          <Route
            path="/electrical-industry"
            element={<ElectricalIndustry />}
          />
          <Route
            path="/food-industry"
            element={<FoodIndustry />}
          />
          <Route
            path="/infrastructure-industry"
            element={<InfrastructureIndustry />}
          />
          <Route
            path="/irrigation-industry"
            element={<IrrigationIndustry />}
          />
          <Route
            path="/labware-industry"
            element={<LabwareIndustry />}
          />
          <Route
            path="/medical-industry"
            element={<MedicalIndustry/>}
          />
          <Route
            path="/oil-industry"
            element={<Oilindustry/>}
          />

        </Routes>

      </main>

      {/* FOOTER */}
      <Footer />

    </BrowserRouter>
  );
};

export default App;