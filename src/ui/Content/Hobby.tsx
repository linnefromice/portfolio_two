import { FC } from "react";
import {
  FaBasketballBall,
  FaChessKing,
  FaFootballBall,
  FaGamepad,
  FaHeart,
} from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { MdMovie, MdMusicNote, MdRadio } from "react-icons/md";
import "./Hobby.css";

interface Hobby {
  icon: JSX.Element;
  primary: string;
  secondary: string;
}

const HOBBY_LIST: Hobby[] = [
  {
    icon: <GiSoccerBall size="24" />,
    primary: "Soccer",
    secondary: "midfielder / since elementary school / I like barcelona FC.",
  },
  {
    icon: <MdMovie size="24" />,
    primary: "Movie",
    secondary:
      "Fav: The Trueman Show / The Family Man / Real Steel / Avengers ...",
  },
  {
    icon: <FaHeart size="24" />,
    primary: "Idol",
    secondary:
      "Hinatazaka46, Miyuki Watanabe (Milky), Erika Ikuta (Nogizaka46) ...",
  },
  {
    icon: <FaBasketballBall size="24" />,
    primary: "NBA Appreciation",
    secondary:
      "Fav: Stephan Curry, Rajon Rondo, Derrick Rose, Warriors, Celtics...",
  },
  {
    icon: <FaChessKing size="24" />,
    primary: "Board Game",
    secondary: "Fav: Catan, Village (department of architecture) ...",
  },
  {
    icon: <FaGamepad size="24" />,
    primary: "TV Game",
    secondary: "Fav: DewPrism(PS), GunparadeMarch(PS), FinalFantasy...",
  },
  {
    icon: <MdMusicNote size="24" />,
    primary: "Music",
    secondary:
      "Fav: Mrs. Green Apple, Carly Rae Jepsen, Hikaru Utada, Owl City ...",
  },
  {
    icon: <MdRadio size="24" />,
    primary: "Radio",
    secondary: "All Night-NIPPON (Audrey)",
  },
  {
    icon: <FaFootballBall size="24" />,
    primary: "NFL Appreciation",
    secondary: "I learned from Audrey NFL Club, no longer from Masayasu.W",
  },
];

const Hobby: FC = () => {
  return (
    <div className="hobby-content">
      <div className="hobby-grid">
        {HOBBY_LIST.map((hobby, index) => (
          <div key={index} className="hobby-item">
            <div className="hobby-header">
              <div className="hobby-icon">{hobby.icon}</div>
              <div className="hobby-primary">{hobby.primary}</div>
            </div>
            <div className="hobby-secondary">{hobby.secondary}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobby;
