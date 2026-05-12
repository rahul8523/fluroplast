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
// import ChemicalIndustry from "./pages/industries/ChemicalIndustry";
// import MedicalIndustry from "./pages/industries/MedicalIndustry";

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
            element={<ChemicalIndustry/>}
          />
 {/* 
          <Route
            path="/medical-industry"
            element={<MedicalIndustry />}
          /> */}

        </Routes>

      </main>

      {/* FOOTER */}
      <Footer />

    </BrowserRouter>
  );
};

export default App;