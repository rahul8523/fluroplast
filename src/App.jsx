import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header";
import Footer from "./components/footer";


// pages
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <div className="">
        {/* Header –*/}
        <BrowserRouter>
          <Header />
          {/* Routes */}
          <main className="">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          {/* Footer – */}
          <Footer />
        </BrowserRouter>


      </div>
    </>
  )
}

export default App