import { FC } from "react";
import "./Skill.css";

interface SkillItem {
  name: string;
  color: "primary" | "secondary";
  disabled?: boolean;
}

interface SkillsData {
  work: SkillItem[][];
  private: SkillItem[][];
}

const skillsData: SkillsData = {
  work: [
    [
      { name: "TypeScript", color: "primary" },
      { name: "JavaScript", color: "primary" },
      { name: "React", color: "primary" },
      { name: "Next.js", color: "primary" },
    ],
    [
      { name: "Node.js", color: "secondary" },
      { name: "Python", color: "secondary" },
      { name: "AWS", color: "secondary" },
      { name: "Docker", color: "secondary" },
    ],
  ],
  private: [
    [
      { name: "Rust", color: "primary" },
      { name: "Solidity", color: "primary" },
      { name: "Flutter", color: "primary" },
    ],
    [
      { name: "Go", color: "secondary", disabled: true },
      { name: "Kotlin", color: "secondary", disabled: true },
    ],
  ],
};

const Skill: FC = () => {
  return (
    <div className="skill-content">
      {Object.entries(skillsData).map(([category, skillGroups]) => (
        <div key={category} className="skill-category">
          <h3 className="skill-category-title">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h3>
          <div className="skill-groups">
            {skillGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="skill-group">
                {group.map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-chip ${skill.color} ${
                      skill.disabled ? "disabled" : ""
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
