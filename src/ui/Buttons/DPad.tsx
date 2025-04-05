import { FC } from "react";
import "./DPad.css";

interface DPadProps {
  onUp?: () => void;
  onRight?: () => void;
  onDown?: () => void;
  onLeft?: () => void;
}

const DPad: FC<DPadProps> = ({ onUp, onRight, onDown, onLeft }) => {
  return (
    <div className="d-pad">
      <button className="d-pad-button up" aria-label="Up" onClick={onUp}>
        <span className="arrow" />
      </button>
      <button
        className="d-pad-button right"
        aria-label="Right"
        onClick={onRight}
      >
        <span className="arrow" />
      </button>
      <button className="d-pad-button down" aria-label="Down" onClick={onDown}>
        <span className="arrow" />
      </button>
      <button className="d-pad-button left" aria-label="Left" onClick={onLeft}>
        <span className="arrow" />
      </button>
      <div className="d-pad-center" />
    </div>
  );
};

export default DPad;
