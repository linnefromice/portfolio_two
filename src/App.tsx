import { useState } from "react";
import "./App.css";
import buttonRight from "./assets/button_right.svg";
import DPad from "./ui/Buttons/DPad";
import Menus from "./ui/Menus";

const App = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(0);

  const handleDPadLeft = () => {
    setActiveMenuIndex((prev) => (prev > 0 ? prev - 1 : prev));
    setActiveSubMenuIndex(0); // メインメニュー切り替え時にサブメニューをリセット
  };

  const handleDPadRight = () => {
    setActiveMenuIndex((prev) => (prev < 2 ? prev + 1 : prev));
    setActiveSubMenuIndex(0); // メインメニュー切り替え時にサブメニューをリセット
  };

  const handleDPadUp = () => {
    if (activeMenuIndex === 0) {
      setActiveSubMenuIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (activeMenuIndex === 2) {
      setActiveSubMenuIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  const handleDPadDown = () => {
    const maxSubMenu =
      activeMenuIndex === 0 ? 3 : activeMenuIndex === 2 ? 3 : 0;
    if (maxSubMenu > 0) {
      setActiveSubMenuIndex((prev) => (prev < maxSubMenu ? prev + 1 : prev));
    }
  };

  return (
    <div className="game-console flex-center">
      <div className="controller left">
        <DPad
          onLeft={handleDPadLeft}
          onRight={handleDPadRight}
          onUp={handleDPadUp}
          onDown={handleDPadDown}
          activeIndex={activeMenuIndex}
          maxIndex={3}
          activeSubIndex={activeSubMenuIndex}
          maxSubIndex={activeMenuIndex === 0 || activeMenuIndex === 2 ? 4 : 0}
        />
      </div>
      <div className="screen-container">
        <div className="stream-background">
          <div className="stream-top" />
          <div className="stream-bottom" />
        </div>
        <div className="content">
          <Menus
            activeIndex={activeMenuIndex}
            onMenuChange={setActiveMenuIndex}
            activeSubMenu={activeSubMenuIndex}
            onSubMenuChange={setActiveSubMenuIndex}
          />
        </div>
      </div>
      <div className="controller right">
        <img src={buttonRight} alt="Right Controller" />
      </div>
    </div>
  );
};

export default App;
