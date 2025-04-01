import { FC } from "react";
import {
  FaGithub,
  FaIdCardAlt,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import "./Profile.css";

// 画像のインポートを相対パスで修正

const Profile: FC = () => {
  return (
    <div className="profile-content">
      <div className="profile-avatar">
        <img src="/icon_account_resize.jpg" alt="Profile Avatar" />
      </div>
      <h2 className="profile-name">Arata</h2>

      <div className="profile-info-row">
        <FiAtSign />
        <span>linnefromice</span>
      </div>

      <div className="profile-divider" />

      <div className="profile-info-row">
        <FaIdCardAlt />
        <span>Web2 Developer</span>
      </div>

      <div className="profile-info-row">
        <FaMapMarkerAlt />
        <span>Tokyo, Japan</span>
      </div>

      <div className="profile-divider" />

      <p className="profile-description">
        I also like Rust / TypeScript / Flutter & Dapps.
      </p>

      <div className="profile-divider" />

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
      </div>
    </div>
  );
};

export default Profile;
