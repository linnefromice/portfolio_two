import { useState } from "react";
import "./App.css";
import buttonRight from "./assets/button_right.svg";
import DPad from "./ui/Buttons/DPad";
import Menus from "./ui/Menus";

const App = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);

  const handleDPadLeft = () => {
    setActiveMenuIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleDPadRight = () => {
    setActiveMenuIndex((prev) => (prev < 2 ? prev + 1 : prev));
  };

  return (
    <div className="game-console flex-center">
      <div className="controller left">
        <DPad onLeft={handleDPadLeft} onRight={handleDPadRight} />
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
