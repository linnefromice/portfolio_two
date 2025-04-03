import { FC } from "react";
import image1 from "../../../assets/side/tweet_1.gif";
import image2 from "../../../assets/side/tweet_2.gif";
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
      <img src={image1} alt="Tweet App Demo 1" className="info-image" />
      <img src={image2} alt="Tweet App Demo 2" className="info-image" />
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
