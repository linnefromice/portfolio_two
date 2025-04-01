import { FC, useState } from "react";
import { MdAccountCircle, MdLanguage, MdSmartphone } from "react-icons/md";
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
    icon: <MdLanguage size="24" />,
    label: "Product Web",
  },
  {
    icon: <MdSmartphone size="24" />,
    label: "Product Mobile",
  },
];

const Menus: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <button
          key={item.label}
          className={`menu-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => setActiveIndex(index)}
        >
          <div className="menu-icon">{item.icon}</div>
          {activeIndex === index && (
            <span className="menu-label">{item.label}</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default Menus;
