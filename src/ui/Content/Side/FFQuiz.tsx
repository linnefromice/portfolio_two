import { FC } from "react";
import { FF_QUIZ } from "../../Side/constants";
import InfoBase from "./InfoBase";

const FFQuiz: FC = () => {
  const Description = () => (
    <div>
      {FF_QUIZ.description.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );

  const Skills = () => (
    <>
      {FF_QUIZ.skills.map((skill, index) => (
        <span key={index} className="skill-chip">
          {skill}
        </span>
      ))}
    </>
  );

  const Links = () => (
    <>
      {FF_QUIZ.links.map((link, index) => (
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
        src="/src/assets/side/ff_quiz_1.png"
        alt="FF Quiz Screenshot 1"
        className="info-image"
      />
      <img
        src="/src/assets/side/ff_quiz_2.png"
        alt="FF Quiz Screenshot 2"
        className="info-image"
      />
    </div>
  );

  return (
    <InfoBase
      title={FF_QUIZ.title}
      description={<Description />}
      skills={<Skills />}
      links={<Links />}
      images={<Images />}
    />
  );
};

export default FFQuiz;
