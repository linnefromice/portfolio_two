import { FC } from "react";
import { MENU_CONFIG } from "../config/menuConfig";
import Content from "./Content/Content";
import "./Menus.css";
import SubMenu from "./SubMenu";

interface MenusProps {
  activeIndex: number;
  onMenuChange: (index: number) => void;
  activeSubMenu: number;
  onSubMenuChange: (index: number) => void;
}

const Menus: FC<MenusProps> = ({
  activeIndex,
  onMenuChange,
  activeSubMenu,
  onSubMenuChange,
}) => {
  const currentMenu = MENU_CONFIG[activeIndex];

  return (
    <>
      <div className="menu-container">
        {MENU_CONFIG.map((item, index) => (
          <button
            key={item.id}
            className={`menu-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => onMenuChange(index)}
          >
            <div className="menu-icon">{item.icon}</div>
            {activeIndex === index && (
              <span className="menu-label">{item.label}</span>
            )}
          </button>
        ))}
      </div>
      {currentMenu.submenus.length > 0 && (
        <SubMenu
          items={currentMenu.submenus}
          activeSubMenu={activeSubMenu}
          onSubMenuSelect={onSubMenuChange}
        />
      )}
      <Content activeMenu={activeIndex} activeSubMenu={activeSubMenu} />
    </>
  );
};

export default Menus;
