import { FC } from "react";
import { MENU_CONFIG } from "../../config/menuConfig";
import "./Content.css";

interface ContentProps {
  activeMenu: number;
  activeSubMenu: number;
}

const Content: FC<ContentProps> = ({ activeMenu, activeSubMenu }) => {
  const menu = MENU_CONFIG[activeMenu];
  if (!menu) return null;

  const Component =
    menu.submenus.length > 0
      ? menu.submenus[activeSubMenu]?.component
      : menu.component;

  if (!Component) return null;

  return (
    <div className="content-display">
      <Component />
    </div>
  );
};

export default Content;
