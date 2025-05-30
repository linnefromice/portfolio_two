import { FC, useEffect, useState } from "react";
import "./Work.css";

const WORK_IMAGES = import.meta.glob("/src/assets/work/*.png", {
  eager: true,
  import: "default",
});
const SECRET_WORK_IMAGES = import.meta.glob("/src/assets/work/secret/*.png", {
  eager: true,
  import: "default",
});

interface WorkData {
  key: string;
  src: string;
  isShadingOff: boolean;
}
const SECRET_WORKS: WorkData[] = Object.entries(SECRET_WORK_IMAGES).map(
  ([path, url]) => ({
    key: path,
    src: url as string,
    isShadingOff: true,
  })
);
const PUBLIC_WORKS: WorkData[] = Object.entries(WORK_IMAGES).map(
  ([path, url]) => ({
    key: path,
    src: url as string,
    isShadingOff: false,
  })
);
const ALL_WORKS = [...SECRET_WORKS, ...PUBLIC_WORKS];

interface WorkImage {
  src: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  opacity: number;
  isCircle: boolean;
  hue: number;
}

const Work: FC = () => {
  const [images, setImages] = useState<WorkImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [isAllDisplayed, setIsAllDisplayed] = useState(false);

  useEffect(() => {
    if (cycle >= 2) {
      setIsAllDisplayed(true);
      return;
    }

    const createNextImage = (): WorkImage => {
      const randomX = Math.random() * 120 - 60;
      const randomY = Math.random() * 120 - 60;

      const workData = ALL_WORKS[currentIndex];

      return {
        src: workData.src,
        x: randomX,
        y: randomY,
        scale: 0.25 + Math.random() * 0.15,
        rotation: Math.random() * 30 - 15,
        opacity: workData.isShadingOff ? 0.2 : 0.8,
        isCircle: Math.random() > 0.5,
        hue: Math.random() * 360,
      };
    };

    const interval = setInterval(() => {
      setImages((prev) => {
        const newImage = createNextImage();
        const newImages = [...prev, newImage];

        const updatedImages = newImages.map((img) => {
          if (img === newImage) {
            return {
              ...img,
              opacity: Math.min(1, img.opacity + 0.05),
            };
          }

          const moveX = (Math.random() - 0.5) * 2;
          const moveY = (Math.random() - 0.5) * 2;

          return {
            ...img,
            x: Math.max(-45, Math.min(45, img.x + moveX)),
            y: Math.max(-45, Math.min(45, img.y + moveY)),
            opacity: Math.max(0, img.opacity - 0.02),
          };
        });

        return updatedImages.filter((img) => img.opacity > 0);
      });

      setCurrentIndex((prev) => {
        const next = (prev + 1) % ALL_WORKS.length;
        if (next === 0) {
          setCycle((c) => c + 1);
        }
        return next;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [currentIndex, cycle]);

  return (
    <div className="work-content">
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className={`work-image-container ${
            image.isCircle ? "circle" : "square"
          }`}
          style={{
            transform: `translate(calc(-50% + ${image.x}%), calc(-50% + ${image.y}%)) 
                       scale(${image.scale}) 
                       rotate(${image.rotation}deg)`,
            opacity: image.opacity,
            borderColor: `hsla(${image.hue}, 70%, 60%, 0.8)`,
            boxShadow: `0 0 15px hsla(${image.hue}, 70%, 60%, 0.3)`,
          }}
        >
          <img
            src={image.src}
            alt={`Work ${index + 1}`}
            className="work-image"
          />
        </div>
      ))}
      {isAllDisplayed && (
        <div className="work-overlay">
          <span className="work-more-text">and more ...</span>
        </div>
      )}
    </div>
  );
};

export default Work;
