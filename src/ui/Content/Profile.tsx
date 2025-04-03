import { FC } from "react";
import {
  FaGithub,
  FaIdCardAlt,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import "./Profile.css";

const PROFILE_ITEM_LIST: {
  icon: React.ReactNode;
  value: string;
}[] = [
  {
    icon: <FiAtSign />,
    value: "linnefromice",
  },
  {
    icon: <FaIdCardAlt />,
    value: "Web Developer",
  },
  {
    icon: <FaMapMarkerAlt />,
    value: "Kanagawa, Japan",
  },
];

const MAIN_SKILL_ITEMS: SkillItem[] = [
  { name: "Rust", color: "primary" },
  { name: "TypeScript", color: "primary" },
  { name: "React", color: "primary" },
  { name: "SwiftUI", color: "primary" },
];

const Profile: FC = () => {
  return (
    <div className="profile-content">
      <div className="profile-top-section">
        <div className="profile-avatar">
          <img src="/icon_account_resize.jpg" alt="Profile Avatar" />
        </div>

        <div className="profile-info-container">
          <h2 className="profile-name">Paru (Arata)</h2>
          {PROFILE_ITEM_LIST.map((item) => (
            <div className="profile-info-row" key={item.value}>
              {item.icon}
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="profile-description">
        I like soccer and games.
        <br />
        And I also like Rust, TypeScript, Flutter, AWS/GCP.
      </p>

      <div className="profile-social-links">
        <a
          href="https://github.com/linnefromice"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://twitter.com/linnefromice"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={28} />
        </a>
        <a
          href="https://jp.linkedin.com/in/linnefromice"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
    </div>
  );
};

export default Profile;
