import { FC } from "react";
import "./Career.css";

interface WorkExperienceData {
  company: string;
  companyUrl?: string;
  formerName?: string;
  duration: string;
  isMain?: boolean;
  details: string[];
}

// Define work experience interface
interface WorkExperienceData {
  company: string;
  companyUrl?: string;
  formerName?: string;
  duration: string;
  isMain?: boolean;
  details: string[];
}

// Work experience data
const workExperienceList: WorkExperienceData[] = [
  {
    company: "Bloom, Inc",
    duration: "2024.10 - Present",
    details: [
      "Mobile Engineer",
      "- iOS/Swift, SwiftUI, SPM MultiModule, apollo-ios, amplify",
    ],
  },
  {
    company: "hana.network",
    companyUrl: "https://hana.network/",
    duration: "2024.8 - Present",
    details: [
      "Hanafuda app / Backend,Frontend,Infrastructure",
      "- TypeScript, GraphQL Yoga, Prisma, Next.js, Docker, Terraform, GCP (Cloud Run, Cloud SQL etc)",
      "Capsule Shop",
      "- Solidity (ERC721), TypeScript",
    ],
  },
  {
    company: "HorizonX, Inc.",
    companyUrl: "https://horizonx.tech/",
    duration: "2022.9 - 2024.9",
    isMain: true,
    details: [
      "Technical validation and research on Blockchain",
      "- Non-EVM (Sui, Aptos, Solana etc), Hybrid Account Model, Zero Knowledge, Layer2",
      "- Lang: Move, Cairo, circom, snarkjs etc",
      "Dapps development in different chains",
      "- Aptos, Cosmos (tendermint), Internet Computer etc",
      "- Lang: Move, Go, Rust, Next.js",
      "Platforms on the blockchain and their development tools",
      "- CLI tools and application generators within the platform, making full use of macros",
      "- Lang: Rust, Rust Macros",
    ],
  },
  {
    company: "Bridges, Inc.",
    companyUrl: "https://bridges.inc/",
    duration: "2022.2 - 2022.6",
    isMain: true,
    details: [
      "In EVM compatible chains, DeFi development based on Aave, Curve, Convex...",
      "- Solidity, TypeScript, Ethers.js, React, Next.js, Assembly Script, AWS...",
    ],
  },
  {
    company: "Money Forward, Inc.",
    companyUrl: "https://corp.moneyforward.com/",
    duration: "2020.6 - 2022.1",
    isMain: true,
    details: [
      "20.6-20.12: Crosscutting product improvement/development for BtoB Services.",
      "20.12-21.12: Renewal project for BtoB Services.",
      "- Ruby(Rails), MySQL, Redis, TypeScript, Next.js, Docker, AWS, Kubernetes, Terraform...",
      "- Engineer leader / Challenge modern frontend using OAS3, GraphQL, Recoil, msw, mui-v5 etc...",
      "- Playing manager, I implemented the front, api server and infra. Also, I advanced most upstream processes.",
      "21.6-21.9: (voluntary) Create Mobile app version from existing web app for Employees.",
      "- Flutter, Ruby(Rails), Next.js...",
    ],
  },
  {
    company: "Simplex Inc.",
    companyUrl: "https://www.simplex.inc/",
    duration: "2016.4 - 2020.4",
    isMain: true,
    details: [
      "- Experienced from leading in to O&M / from player to manager.",
      "- Financial(CryptoAssets/FX) trade system for individuals & security company.",
      "- Java(Spring), HTML/CSS, JavaScript(React), AWS, Apache Cordova, Oracle, Tomcat, Github, Jenkins ...",
      "18.4-18.7: Mentor / Training for 150 new graduates",
      "19.7-20.4: Dev lead (having 30 members) / New development of hybrid application & back system in leading",
    ],
  },
  {
    company: "LCA GAME GUILD PTE.LTD.",
    companyUrl: "https://official.lca-game-guild.com",
    duration: "2023.4 - Present",
    details: [
      "- Technical Advisory",
      "- Support for lectures on Blockchain, DeFi",
    ],
  },
  {
    company: "Crien inc.",
    companyUrl: "https://www.crien.jp/",
    duration: "2022.12 - 2024.12",
    details: [
      "Support as tech lead on contracted development projects.",
      "Pj1: Game Application for Workshop (C++, AngularJS, TypeScript, Docker, AWS)",
      "- Architectural analysis, environment development, and infrastructure construction immediately after project handover",
      "- Response plans, estimates, and provisional implementation for additional requirements",
      "Pj2: BtoC services related to food and beverage (PHP, Laravel, Vue.js, Nuxt.js, TypeScript, Docker, AWS)",
      "- All processes from requirement definition to implementation and testing",
      "- Support for the engineer in charge",
    ],
  },
  {
    company: "Alterbo, Inc.",
    companyUrl: "https://alterbo.jp/",
    duration: "2020.12 - Present",
    details: [
      "In-house system improvement",
      "- JavaScript, GoogleAppScript, CloudFunctions, BigQuery, Kintone, board, Mailchimp...",
    ],
  },
  {
    company: "Bridges, Inc.",
    companyUrl: "https://bridges.inc/",
    formerName: "Squared, Inc.",
    duration: "2020.11 - 2022.1",
    details: [
      "20.11-20.12: Create app to express gratitudes",
      "- Flutter (use riverpod), Firebase, Adobe XD...",
      "21.07-21.11: Create frontend of dapps application",
      "- ethers.js (for connecting wallet/contract) Nextjs, TypeScript, Recoil...",
    ],
  },
];

const Career: FC = () => {
  const mainExperiences = workExperienceList.filter((exp) => exp.isMain);
  const sideExperiences = workExperienceList.filter((exp) => !exp.isMain);

  const ExperienceItem: FC<{ experience: WorkExperienceData }> = ({
    experience,
  }) => (
    <div className="career-item">
      <div className="career-header">
        <div className="career-title">
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
          {experience.formerName && (
            <span className="former-name">
              (former {experience.formerName})
            </span>
          )}
        </div>
        <div className="career-duration">{experience.duration}</div>
      </div>
      <div className="career-details">
        {experience.details.map((detail, index) => (
          <div key={index} className="career-detail-item">
            {detail}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="career-content">
      <div className="career-section">
        <h2 className="career-section-title">Main Experience</h2>
        {mainExperiences.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </div>
      <div className="career-section">
        <h2 className="career-section-title">Side Experience</h2>
        {sideExperiences.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default Career;
