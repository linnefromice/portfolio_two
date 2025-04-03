import { FC } from "react";
import { WAR_SIM_GAME } from "../../Side/constants";
import InfoBase from "./InfoBase";

const WarSimGame: FC = () => {
  const Description = () => (
    <div>
      {WAR_SIM_GAME.description.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );

  const Skills = () => (
    <>
      {WAR_SIM_GAME.skills.map((skill, index) => (
        <span key={index} className="skill-chip">
          {skill}
        </span>
      ))}
    </>
  );

  const Links = () => (
    <>
      {WAR_SIM_GAME.links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="info-link"
        >
          {link.icon}
        </a>
      ))}
    </>
  );

  const Images = () => (
    <img
      src="/src/assets/side/war_sim_game_1.gif"
      alt="War Simulation Game"
      className="info-image"
    />
  );

  return (
    <InfoBase
      title={WAR_SIM_GAME.title}
      description={<Description />}
      skills={<Skills />}
      links={<Links />}
      images={<Images />}
    />
  );
};

export default WarSimGame;
