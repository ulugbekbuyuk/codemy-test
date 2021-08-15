import React, { useState, useEffect } from "react";

export const TimeComponent = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
    
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
};

export default TimeComponent;
