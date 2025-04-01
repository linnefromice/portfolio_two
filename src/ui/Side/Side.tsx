import { FC } from "react";
import { FaTwitter } from "react-icons/fa";
import { MdSmartphone, MdWeb } from "react-icons/md";
import "./Side.css";

interface SubMenuItem {
  icon: JSX.Element;
  label: string;
}

const subMenuItems: SubMenuItem[] = [
  {
    icon: <MdWeb size="20" />,
    label: "war_sim_game",
  },
  {
    icon: <FaTwitter size="20" />,
    label: "tweet",
  },
  {
    icon: <MdSmartphone size="20" />,
    label: "study_record",
  },
  {
    icon: <MdSmartphone size="20" />,
    label: "ff_quiz",
  },
];

interface SideProps {
  activeSubMenu: number;
  onSubMenuSelect: (index: number) => void;
}

const Side: FC<SideProps> = ({ activeSubMenu, onSubMenuSelect }) => {
  return (
    <div className="submenu-container">
      {subMenuItems.map((item, index) => (
        <button
          key={item.label}
          className={`submenu-item ${activeSubMenu === index ? "active" : ""}`}
          onClick={() => onSubMenuSelect(index)}
        >
          <div className="submenu-icon">{item.icon}</div>
          <span className="submenu-label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Side;
