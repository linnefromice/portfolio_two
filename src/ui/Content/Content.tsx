import { FC } from "react";
import { FaTwitter } from "react-icons/fa";
import { MdAccountCircle, MdSmartphone, MdWeb, MdWork } from "react-icons/md";
import Career from "./Career";
import "./Content.css";
import Hobby from "./Hobby";
import Profile from "./Profile";
import FFQuiz from "./Side/FFQuiz";
import StudyRecord from "./Side/StudyRecord";
import Tweet from "./Side/Tweet";
import WarSimGame from "./Side/WarSimGame";
import Skill from "./Skill";
import Work from "./Work/Work";

interface ContentProps {
  activeMenu: number;
  activeSubMenu: number;
}

const Content: FC<ContentProps> = ({ activeMenu, activeSubMenu }) => {
  // Account menu の表示
  if (activeMenu === 0) {
    if (activeSubMenu === 0) {
      return (
        <div className="content-display">
          <Profile />
        </div>
      );
    }
    if (activeSubMenu === 1) {
      return (
        <div className="content-display">
          <Skill />
        </div>
      );
    }
    if (activeSubMenu === 2) {
      return (
        <div className="content-display">
          <Career />
        </div>
      );
    }
    if (activeSubMenu === 3) {
      return (
        <div className="content-display">
          <Hobby />
        </div>
      );
    }
  }

  if (activeMenu === 1) {
    return (
      <div className="content-display">
        <Work />
      </div>
    );
  }

  // Side menuの場合
  if (activeMenu === 2) {
    if (activeSubMenu === 0)
      return (
        <div className="content-display">
          <WarSimGame />
        </div>
      );
    if (activeSubMenu === 1)
      return (
        <div className="content-display">
          <Tweet />
        </div>
      );
    if (activeSubMenu === 2)
      return (
        <div className="content-display">
          <StudyRecord />
        </div>
      );
    if (activeSubMenu === 3)
      return (
        <div className="content-display">
          <FFQuiz />
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
