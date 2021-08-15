import React, { useEffect, useState } from "react";
import "../Styles/Hall.scss";
const Hall = () => {
  const [bgColor, setBgColor] = useState("#000000");

  const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(`#${randomColor}`);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setBg();
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div className="hall" style={{ backgroundColor: `${bgColor}` }}></div>;
};

export default Hall;
