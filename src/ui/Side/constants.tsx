import { FaGithub, FaLink, FaWikipediaW } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

interface SideWork {
  title: string;
  description: string[];
  skills: string[];
  links: {
    icon: React.ReactNode;
    url: string;
  }[];
}

export const WAR_SIM_GAME: SideWork = {
  title: "War Simulation Game",
  description: [
    "Simulation game-like application that runs on browser-only assets",
    "Use React & Vite, Cloudflare Pages for deployment",
  ],
  skills: ["React", "TypeScript", "Vite", "Cloudflare Pages"],
  links: [
    {
      icon: <FaGithub />,
      url: "https://github.com/linnefromice/war-sim-game",
    },
    {
      icon: <GrDeploy />,
      url: "https://war-sim-game.pages.dev/",
    },
  ],
};

export const TWEET: SideWork = {
  title: "Tweet",
  description: [
    "client/server app like twitter.",
    "Use react for client, rails for server.",
    "CRUD api for User/Tweet models & Authentication function.",
  ],
  skills: ["React", "TypeScript", "styled-component", "Ruby on Rails", "RSpec"],
  links: [
    {
      icon: <FaGithub />,
      url: "https://github.com/linnefromice/app_tweet_01",
    },
  ],
};

export const STUDY_RECORD: SideWork = {
  title: "Study Record App",
  description: [
    "We can save study record.",
    "Record summary is displayed with graph.",
    "Mobile Application / ios & android",
  ],
  skills: ["Dart", "Flutter", "SQLite"],
  links: [
    {
      icon: <FaGithub />,
      url: "https://github.com/linnefromice/study_record_app_01",
    },
  ],
};

export const FF_QUIZ: SideWork = {
  title: "FFIX Quiz",
  description: [
    "4-Choice Quiz Application about Final Fantasy IX.",
    "Language: English, Japanese",
    "Level: 3 pattern",
    "Other: Story Overview.",
  ],
  skills: ["Dart", "Flutter"],
  links: [
    {
      icon: <FaGithub />,
      url: "https://github.com/linnefromice/ff_quiz_app_flutter_01",
    },
    {
      icon: <FaLink />,
      url: "https://www.jp.square-enix.com/ff9/",
    },
    {
      icon: <FaWikipediaW />,
      url: "https://en.wikipedia.org/wiki/Final_Fantasy_IX",
    },
  ],
};
