import { FC } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdFreeBreakfast, MdWorkHistory } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import "./Account.css";

interface SubMenuItem {
  icon: JSX.Element;
  label: string;
}

const subMenuItems: SubMenuItem[] = [
  {
    icon: <RiProfileLine size="24" className="submenu-icon-svg" />,
    label: "Profile",
  },
  {
    icon: <MdWorkHistory size="24" className="submenu-icon-svg" />,
    label: "Skill",
  },
  {
    icon: <FaGraduationCap size="24" className="submenu-icon-svg" />,
    label: "Career",
  },
  {
    icon: <MdFreeBreakfast size="24" className="submenu-icon-svg" />,
    label: "Hobby",
  },
];

interface AccountProps {
  activeSubMenu: number;
  onSubMenuSelect: (index: number) => void;
}

const Account: FC<AccountProps> = ({ activeSubMenu, onSubMenuSelect }) => {
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

export default Account;
