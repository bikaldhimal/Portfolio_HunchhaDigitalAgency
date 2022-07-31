import React from "react";
import Header from "./components/header/Header";
import Chart from "./components/chart/Chart";
import Map from "./components/map/Map";
import Footer from "./components/footer/Footer";
import Messenger from "./components/messenger/Messenger";

const App = () => {
  return (
    <>
      <Header />
      <Chart />
      <Map />
      <Footer />
      <Messenger />
    </>
  );
};

export default App;
