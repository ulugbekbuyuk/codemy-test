import React, { useEffect, useState } from "react";
import "../Styles/Battery.scss";
const BatteryComponent = () => {
  const [percent, setPercent] = useState("");
  const [percentage, setPercentage] = useState("");
  const [isCharging, setIsCharging] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    navigator.getBattery().then((battery) => {
      const updateLevelInfo = () => {
        setPercentage(battery.level * 100 + "%");
        setPercent(battery.level * 100 + "%");
      };
      function updateChargeInfo() {
        setIsCharging(
          battery.charging
            ? "Your device is charging"
            : "Your device isn't charging"
        );
        setShowIcon(battery.charging ? !showIcon : showIcon);
      }
      if (battery.charging) {
        updateChargeInfo();
      }
      if (battery.level > 0) {
        updateLevelInfo();
      }
      //   battery.addEventlistenet(
      //     "levelchange",
      //     () => {
      //       updateLevelInfo();
      //     },
      //     false
      //   );
      //   if(battter.)
      //   battery.charging
      //     "chargingchange",
      //     () => {
      //       updateChargeInfo();
      //     },
      //     false
      //   );
      const updateAllInfo = () => {
        updateChargeInfo();
        updateLevelInfo();
      };

      setInterval(() => {
        updateAllInfo();
      }, 1000);
    });
  }, []);
  return (
    <div className="batteryShape">
      {showIcon ? <i class="fas fa-charging-station"></i> : ""}
      <div className="batteryBorder">
        <div className="percent" style={{ width: `${percent}` }}>
          <div className="percentage">{percentage}</div>
        </div>
      </div>
      <p className="subInfo"> battery status of your device </p>

      <div className="chargInfo">{isCharging}</div>
      <p className="subChargeInfo"> battery status in power mode </p>
    </div>
  );
};

export default BatteryComponent;
