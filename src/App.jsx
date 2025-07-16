import { useState } from "react";
import Header from "./components/layout/Header/Header";
import Hero from "./components/sections/Hero/Hero";
import ProductShowcase from "./components/sections/ProductShowcase/ProductShowcase";
import CategoryShowcase from "./components/sections/CategoryShowcase/CategoryShowcase";
import Footer from "./components/layout/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductShowcase />
      <CategoryShowcase />
      <Footer />
    </>
  );
}

export default App;
