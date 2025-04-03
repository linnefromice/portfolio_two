import { FC } from "react";
import { SkillItem } from "../types";
import "./Skill.css";

interface SkillsData {
  work: SkillItem[][];
  private: SkillItem[][];
}

const skillsData: SkillsData = {
  work: [
    [
      { name: "JavaScript", color: "primary" },
      { name: "TypeScript", color: "primary" },
      { name: "React", color: "secondary" },
      { name: "Next.js", color: "secondary" },
      { name: "recoil", color: "secondary" },
    ],
    [
      { name: "Java", color: "primary" },
      { name: "Spring", color: "secondary" },
      { name: "Spring Boot", color: "secondary" },
      { name: "Ruby", color: "primary" },
      { name: "Ruby on Rails", color: "secondary" },
    ],
    [
      { name: "Go", color: "primary" },
      { name: "Rust", color: "primary" },
      { name: "Rust Macros", color: "primary" },
      { name: "Swift", color: "primary" },
      { name: "SwiftUI", color: "primary" },
    ],
    [
      { name: "AWS", color: "primary", disabled: true },
      { name: "GCP", color: "primary", disabled: true },
      { name: "Terraform", color: "primary" },
      { name: "aws-cdk", color: "primary" },
    ],
    [
      { name: "Oracle", color: "secondary" },
      { name: "PostgreSQL", color: "secondary" },
      { name: "MySQL", color: "secondary" },
      { name: "Docker", color: "primary" },
      { name: "Kubernetes", color: "primary" },
    ],
    [
      { name: "Solidity", color: "primary" },
      { name: "Move", color: "primary" },
      { name: "Solana", color: "primary", disabled: true },
      { name: "ethersjs", color: "secondary" },
      { name: "hardhat", color: "secondary" },
    ],
  ],
  private: [
    [
      { name: "Dart", color: "primary" },
      { name: "Deno", color: "primary", disabled: true },
      { name: "Vue", color: "secondary" },
      { name: "Nuxt", color: "secondary", disabled: true },
    ],
    [
      { name: "Kotlin", color: "primary", disabled: true },
      { name: "Flutter", color: "secondary" },
    ],
    [
      { name: "C#", color: "primary", disabled: true },
      { name: "Unity", color: "secondary", disabled: true },
    ],
    [{ name: "Firebase", color: "primary", disabled: true }],
    [
      { name: "Blazor", color: "secondary", disabled: true },
      { name: "Adobe XD", color: "secondary", disabled: true },
      { name: "Adobe Fresco", color: "secondary", disabled: true },
      { name: "Prott", color: "secondary", disabled: true },
    ],
    [
      { name: "Kintone", color: "secondary" },
      { name: "Mailchimp", color: "secondary", disabled: true },
      { name: "board", color: "secondary", disabled: true },
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
