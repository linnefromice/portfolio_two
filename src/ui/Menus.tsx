import { FC } from "react";
import { MdAccountCircle, MdCode, MdWork } from "react-icons/md";
import Account from "./Account/Account";
import Content from "./Content/Content";
import "./Menus.css";
import Side from "./Side/Side";

interface MenuItem {
  icon: JSX.Element;
  label: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <MdAccountCircle size="20" />,
    label: "Account",
  },
  {
    icon: <MdWork size="20" />,
    label: "Work",
  },
  {
    icon: <MdCode size="20" />,
    label: "Side",
  },
];

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
  return (
    <>
      <div className="menu-container">
        {menuItems.map((item, index) => (
          <button
            key={item.label}
            className={`menu-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => {
              onMenuChange(index);
              onSubMenuChange(0);
            }}
          >
            <div className="menu-icon">{item.icon}</div>
            {activeIndex === index && (
              <span className="menu-label">{item.label}</span>
            )}
          </button>
        ))}
      </div>
      {activeIndex === 0 && (
        <Account
          activeSubMenu={activeSubMenu}
          onSubMenuSelect={onSubMenuChange}
        />
      )}
      {activeIndex === 2 && (
        <Side activeSubMenu={activeSubMenu} onSubMenuSelect={onSubMenuChange} />
      )}
      <Content activeMenu={activeIndex} activeSubMenu={activeSubMenu} />
    </>
  );
};

export default Menus;
