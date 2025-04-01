import "./App.css";
import buttonLeft from "./assets/button_left.svg";
import buttonRight from "./assets/button_right.svg";
import Menus from "./ui/Menus";

const App = () => {
  return (
    <div className="game-console flex-center">
      <div className="controller left">
        <img src={buttonLeft} alt="Left Controller" />
      </div>
      <div className="screen-container">
        <div className="stream-background">
          <div className="stream-top" />
          <div className="stream-bottom" />
        </div>
        <div className="content">
          <Menus />
        </div>
      </div>
      <div className="controller right">
        <img src={buttonRight} alt="Right Controller" />
      </div>
    </div>
  );
};

export default App;
