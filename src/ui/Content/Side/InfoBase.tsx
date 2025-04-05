import { FC, ReactNode, useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "./InfoBase.css";

interface InfoBaseProps {
  title: string;
  description: ReactNode;
  skills: ReactNode;
  links: ReactNode;
  images: ReactNode;
}

const InfoBase: FC<InfoBaseProps> = ({
  title,
  description,
  skills,
  links,
  images,
}) => {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImages(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="info-base">
      <div className={`info-page ${showImages ? "show" : "hide"}`}>
        <div className="info-images-container">{images}</div>
        <button
          className="page-toggle-button bottom"
          onClick={() => setShowImages(false)}
          aria-label="Show details"
        >
          <MdKeyboardArrowDown size="40" />
        </button>
      </div>

      <div className={`info-page ${showImages ? "hide" : "show"}`}>
        <button
          className="page-toggle-button top"
          onClick={() => setShowImages(true)}
          aria-label="Show images"
        >
          <MdKeyboardArrowUp size="40" />
        </button>
        <div className="info-content">
          <h2 className="info-title">{title}</h2>
          <div className="info-description">{description}</div>
          <div className="info-divider" />
          <div className="info-bottom-container">
            <div className="info-skills">{skills}</div>
            <div className="info-links">{links}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBase;
