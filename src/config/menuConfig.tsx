import { ComponentType, ReactNode } from "react";
import { FaGraduationCap, FaTwitter } from "react-icons/fa";
import {
  MdAccountCircle,
  MdCode,
  MdFreeBreakfast,
  MdSmartphone,
  MdWeb,
  MdWork,
  MdWorkHistory,
} from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import Career from "../ui/Content/Career";
import Hobby from "../ui/Content/Hobby";
import Profile from "../ui/Content/Profile";
import FFQuiz from "../ui/Content/Side/FFQuiz";
import StudyRecord from "../ui/Content/Side/StudyRecord";
import Tweet from "../ui/Content/Side/Tweet";
import WarSimGame from "../ui/Content/Side/WarSimGame";
import Skill from "../ui/Content/Skill";
import Work from "../ui/Content/Work/Work";

export interface SubMenuConfig {
  id: string;
  label: string;
  icon: ReactNode;
  component: ComponentType;
}

export interface MenuConfig {
  id: string;
  label: string;
  icon: ReactNode;
  component?: ComponentType;
  submenus: SubMenuConfig[];
}

export const MENU_CONFIG: MenuConfig[] = [
  {
    id: "account",
    label: "Account",
    icon: <MdAccountCircle size="20" />,
    submenus: [
      {
        id: "profile",
        label: "Profile",
        icon: <RiProfileLine size="24" />,
        component: Profile,
      },
      {
        id: "skill",
        label: "Skill",
        icon: <MdWorkHistory size="24" />,
        component: Skill,
      },
      {
        id: "career",
        label: "Career",
        icon: <FaGraduationCap size="24" />,
        component: Career,
      },
      {
        id: "hobby",
        label: "Hobby",
        icon: <MdFreeBreakfast size="24" />,
        component: Hobby,
      },
    ],
  },
  {
    id: "work",
    label: "Work",
    icon: <MdWork size="20" />,
    component: Work,
    submenus: [],
  },
  {
    id: "side",
    label: "Side",
    icon: <MdCode size="20" />,
    submenus: [
      {
        id: "war_sim_game",
        label: "war_sim_game",
        icon: <MdWeb size="20" />,
        component: WarSimGame,
      },
      {
        id: "tweet",
        label: "tweet",
        icon: <FaTwitter size="20" />,
        component: Tweet,
      },
      {
        id: "study_record",
        label: "study_record",
        icon: <MdSmartphone size="20" />,
        component: StudyRecord,
      },
      {
        id: "ff_quiz",
        label: "ff_quiz",
        icon: <MdSmartphone size="20" />,
        component: FFQuiz,
      },
    ],
  },
];
