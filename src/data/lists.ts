import { Education } from "../components/Education";
import { skillLevel } from "../components/SkillLevel";
import gameHub from "../assets/gameHub.png";
import wildLife from "../assets/wildlife.png";
import cookZilla from "../assets/Cookzilla.png";
import { TbBrandLinkedin } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";

export const educationList: Education[] = [
  {
    school: "Seneca College",
    years: "2021 - 2023",
    program: "Computer Programming",
    location: "Newnham Campus, Toronto, ON, Canada",
    skills: [
      "Computer programming.",
      "Operating systems.",
      "Database and web technology.",
      "Data communication.",
      "Security.",
      "Advanced programming languages.",
      "System methodologies.",
      "Internet client and server-side development.",
      "Database system design and maintenance.",
      "Solve problems associated with software installation.",
    ],
  },
  {
    school: "Self Education",
    years: "Ongoing",
    program: "React, TypeScript, Node.js, Python, Security",
    location: "CodeWithMosh, YouTube, Udemy, TryHackMe",
    skills: [
      "Data transfer protocol.",
      "Vulnerabilities and how to avoid them.",
      "NoSQL Databases (MongoDB).",
      "React programming using functional components.",
      "Chakra UI React component library.",
      "Using TypeScript with React to ensure type safety.",
      "Strengthening my knowledge with Node and Express.",
    ],
  },
];

export const skillLevelArr: skillLevel[] = [
  {
    name: "React.js",
    level: 80,
  },
  {
    name: "JavaScript",
    level: 70,
  },
  {
    name: "TypeScript",
    level: 80,
  },
  {
    name: "HTML5",
    level: 80,
  },
  {
    name: "CSS",
    level: 80,
  },
  {
    name: "CSS frameworks",
    level: 90,
  },
  {
    name: "Node.js",
    level: 80,
  },
  {
    name: "SQL/NoSQL databases",
    level: 90,
  },
  {
    name: "Python",
    level: 70,
  },
];

export const workList = [
  "Programming Languages :  C, C++, Java, Python, JavaScript, TypeScript.",
  "Front-End :  React - (Hooks, Custom Hooks, States), HTML5 , CSS3, jQuery, Handlebars, Bootstrap, Chakra UI.",
  "Back-End :  Node.js, Express.js, Axios.",
  "Databases :  OracleDB and MongoDB.",
  "IDEs :  IntelliJ, Visual Studio, Visual Studio Code, PyCharm.",
  "Operating Systems :  Windows, Linux, Unix, IBM i.",
  "Version Control : Git, GitHub.",
];

export const softSkills = [
  "Analytical and technical approach to active problem solving.",
  "Highly organized individual who excels in managing multiple projects and tasks simultaneously.",
  "Team player who takes initiative with strong communication skills and collaborates well with others.",
  "Extremely self-motivated and self-disciplined with good time managment skills assuring tasks are done on time.",
  "Strive on constructive feedback and constant learning.",
  "Willing to take on a variety of tasks.",
];

export const techSkills = [
  "Proficient in HTML, JavaScript, CSS and other web development frameworks to create responsive web pages.",
  "Experience in creating secure sessions and forms using authentication and authorization methods.",
  "In-depth knowledge of NoSQL and SQL data bases such as Oracle and MongoDB for data managment and retrival.",
  "Excited to constantly learn new technologies and be pioneer in the tech industry.",
  "Experience with the design and implementation of RESTful APIs.",
  "Proficient understanding in security and data/input validation.",
  "Experienced in full-stack development using MVC architecture.",
];

export const menu = ["ABOUT", "EDUCATION", "SKILLS", "PORTFOLIO", "CONTACT"];

export const projects = [
  {
    name: "Game Hub",
    tools: ["React", "TypeScript", "ChakraUI", "Axios", "VSCode", "Vite"],
    features: [
      "Filter by: Genre and Platform.",
      "Sort games in your desired way.",
      "Search for any game you want.",
      "Scoring systems.",
      "Game Cards showing details about games.",
      "Dark Mode.",
    ],
    link: "https://game-hub-green-six.vercel.app/",
    image: gameHub,
  },
  {
    name: "CookZilla",
    tools: ["HTML", "CSS", "JavaScript", "Handlebars", "NodeJS", "VSCode"],
    features: [
      "Register and login forms.",
      "Authentication and Authorization of customer and admin accounts.",
      "Weekly recipes and prices.",
      "Meal Cards detailing ingredients and price.",
    ],
    link: "",
    image: cookZilla,
  },
  {
    name: "Wildlife",
    tools: ["HTML", "JavaScript", "CSS", "GeoLocation", "VSCode"],
    features: [
      "Geo Location.",
      "Search for a specific location for species.",
      "Form to add an observation.",
      "Specie filtering.",
    ],
    link: "",
    image: wildLife,
  },
];

export const contactList = [
  { link: "https://www.linkedin.com/in/lionyakubov/", icon: TbBrandLinkedin },
  { link: "https://github.com/Lion011095", icon: BsGithub },
];
