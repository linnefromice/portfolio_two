import { FC } from "react";
import { STUDY_RECORD } from "../../Side/constants";
import InfoBase from "./InfoBase";

const StudyRecord: FC = () => {
  const Description = () => (
    <div>
      {STUDY_RECORD.description.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );

  const Skills = () => (
    <>
      {STUDY_RECORD.skills.map((skill, index) => (
        <span key={index} className="skill-chip">
          {skill}
        </span>
      ))}
    </>
  );

  const Links = () => (
    <>
      {STUDY_RECORD.links.map((link, index) => (
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
      src="/src/assets/side/study_record_1.gif"
      alt="Study Record App"
      className="info-image"
    />
  );

  return (
    <InfoBase
      title={STUDY_RECORD.title}
      description={<Description />}
      skills={<Skills />}
      links={<Links />}
      images={<Images />}
    />
  );
};

export default StudyRecord;
