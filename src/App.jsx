import React from "react";
import Header from "./components/header/Header";
import Chart from "./components/chart/Chart";
import Map from "./components/map/Map";
import Footer from "./components/footer/Footer";
import Testimonials from "./components/testimonials/Testimonials";
import Nav from "./components/nav/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Chart />
      <Map />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
