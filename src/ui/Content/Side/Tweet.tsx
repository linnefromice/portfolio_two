import { FC } from "react";
import { TWEET } from "../../Side/constants";
import InfoBase from "./InfoBase";

const Tweet: FC = () => {
  const Description = () => (
    <div>
      {TWEET.description.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );

  const Skills = () => (
    <>
      {TWEET.skills.map((skill, index) => (
        <span key={index} className="skill-chip">
          {skill}
        </span>
      ))}
    </>
  );

  const Links = () => (
    <>
      {TWEET.links.map((link, index) => (
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
    <div className="info-images">
      <img
        src="/src/assets/side/tweet_1.gif"
        alt="Tweet App Demo 1"
        className="info-image"
      />
      <img
        src="/src/assets/side/tweet_2.gif"
        alt="Tweet App Demo 2"
        className="info-image"
      />
    </div>
  );

  return (
    <InfoBase
      title={TWEET.title}
      description={<Description />}
      skills={<Skills />}
      links={<Links />}
      images={<Images />}
    />
  );
};

export default Tweet;
