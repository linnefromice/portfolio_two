import { FC } from "react";
import { FaTwitter } from "react-icons/fa";
import { MdAccountCircle, MdSmartphone, MdWeb, MdWork } from "react-icons/md";
import "./Content.css";
import Profile from "./Profile";

interface ContentProps {
  activeMenu: number;
  activeSubMenu: number;
}

const Content: FC<ContentProps> = ({ activeMenu, activeSubMenu }) => {
  // Account menu の Profile を表示
  if (activeMenu === 0 && activeSubMenu === 0) {
    return (
      <div className="content-display">
        <Profile />
      </div>
    );
  }

  const getIcon = () => {
    if (activeMenu === 1) return <MdWork size="64" />;
    if (activeMenu === 0) return <MdAccountCircle size="64" />;

    // Side menu icons
    const sideIcons = [
      <MdWeb size="64" />,
      <FaTwitter size="64" />,
      <MdSmartphone size="64" />,
      <MdSmartphone size="64" />,
    ];
    return sideIcons[activeSubMenu];
  };

  const getLabel = () => {
    if (activeMenu === 1) return "Work";

    const items =
      activeMenu === 0
        ? ["Profile", "Career", "Hobby"]
        : ["war_sim_game", "tweet", "study_record", "ff_quiz"];

    return items[activeSubMenu] || "";
  };

  return (
    <div className="content-display">
      <div className="content-icon">{getIcon()}</div>
      <span className="content-label">{getLabel()}</span>
    </div>
  );
};

export default Content;
