import "./App.css";
import buttonRight from "./assets/button_right.svg";
import { useMenuNavigation } from "./hooks/useMenuNavigation";
import DPad from "./ui/Buttons/DPad";
import Menus from "./ui/Menus";

const App = () => {
  const {
    activeMenuIndex,
    activeSubMenuIndex,
    maxMenuIndex,
    maxSubMenuIndex,
    handleDPadLeft,
    handleDPadRight,
    handleDPadUp,
    handleDPadDown,
    handleMenuChange,
    setActiveSubMenuIndex,
  } = useMenuNavigation();

  return (
    <div className="game-console flex-center">
      <div className="controller left">
        <DPad
          onLeft={handleDPadLeft}
          onRight={handleDPadRight}
          onUp={handleDPadUp}
          onDown={handleDPadDown}
          activeIndex={activeMenuIndex}
          maxIndex={maxMenuIndex}
          activeSubIndex={activeSubMenuIndex}
          maxSubIndex={maxSubMenuIndex}
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
            onMenuChange={handleMenuChange}
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
