import { FC } from "react";
import "./DPad.css";

interface DPadProps {
  onUp?: () => void;
  onRight?: () => void;
  onDown?: () => void;
  onLeft?: () => void;
  activeIndex: number;
  maxIndex: number;
  activeSubIndex: number;
  maxSubIndex: number;
}

const DPad: FC<DPadProps> = ({
  onUp,
  onRight,
  onDown,
  onLeft,
  activeIndex,
  maxIndex,
  activeSubIndex,
  maxSubIndex,
}) => {
  const isLeftDisabled = activeIndex === 0;
  const isRightDisabled = activeIndex === maxIndex - 1;
  const isUpDisabled = activeSubIndex === 0 || maxSubIndex === 0;
  const isDownDisabled =
    activeSubIndex === maxSubIndex - 1 || maxSubIndex === 0;

  return (
    <div className="d-pad">
      <button
        className={`d-pad-button up ${isUpDisabled ? "disabled" : ""}`}
        aria-label="Up"
        onClick={onUp}
        disabled={isUpDisabled}
      >
        <span className="arrow" />
      </button>
      <button
        className={`d-pad-button right ${isRightDisabled ? "disabled" : ""}`}
        aria-label="Right"
        onClick={onRight}
        disabled={isRightDisabled}
      >
        <span className="arrow" />
      </button>
      <button
        className={`d-pad-button down ${isDownDisabled ? "disabled" : ""}`}
        aria-label="Down"
        onClick={onDown}
        disabled={isDownDisabled}
      >
        <span className="arrow" />
      </button>
      <button
        className={`d-pad-button left ${isLeftDisabled ? "disabled" : ""}`}
        aria-label="Left"
        onClick={onLeft}
        disabled={isLeftDisabled}
      >
        <span className="arrow" />
      </button>
      <div className="d-pad-center" />
    </div>
  );
};

export default DPad;
