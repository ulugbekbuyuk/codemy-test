import React from "react";
import Home from "../components/Home";
import Hall from "../components/Hall";
import "../Styles/HomeScreen.scss";
import BatteryComponent from "../components/BatteryComponent";

const HomeScreen = () => {
  return (
    <div className="screen">
      <Home />
      <BatteryComponent />

      <Hall />
    </div>
  );
};

export default HomeScreen;
