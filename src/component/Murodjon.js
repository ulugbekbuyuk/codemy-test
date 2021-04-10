import React from "react";

function AlertM() {
  alert("Hello from Murodjon");
}

const Murodjon = () => {
  return (
    <div>
      <button onClick={() => AlertM()}>Alert</button>
    </div>
  );
};

export default Murodjon;
