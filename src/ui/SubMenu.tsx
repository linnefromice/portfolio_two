import { FC } from "react";
import { SubMenuConfig } from "../config/menuConfig";
import "./SubMenu.css";

interface SubMenuProps {
  items: SubMenuConfig[];
  activeSubMenu: number;
  onSubMenuSelect: (index: number) => void;
}

const SubMenu: FC<SubMenuProps> = ({ items, activeSubMenu, onSubMenuSelect }) => {
  return (
    <div className="submenu-container">
      {items.map((item, index) => (
        <button
          key={item.id}
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

export default SubMenu;
