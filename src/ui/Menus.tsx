import { FC, useState } from "react";
import { MdAccountCircle, MdCode, MdWork } from "react-icons/md";
import Account from "./Account/Account";
import "./Menus.css";

interface MenuItem {
  icon: JSX.Element;
  label: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <MdAccountCircle size="24" />,
    label: "Account",
  },
  {
    icon: <MdWork size="24" />,
    label: "Work",
  },
  {
    icon: <MdCode size="24" />,
    label: "Side",
  },
];

const Menus: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSubMenu, setActiveSubMenu] = useState(0);

  return (
    <>
      <div className="menu-container">
        {menuItems.map((item, index) => (
          <button
            key={item.label}
            className={`menu-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => {
              setActiveIndex(index);
              setActiveSubMenu(0); // サブメニュー選択をリセット
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
          onSubMenuSelect={setActiveSubMenu}
        />
      )}
    </>
  );
};

export default Menus;
