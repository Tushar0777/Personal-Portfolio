import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  flutter,
  docker,
  meta,
  Birlasoft_logo,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  naarishakti,
  goodnight,
  paisa
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Devops Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  // {
  //   title: "MERN-Stack Developer",
  //   company_name: "BirlaSoft- MK Birla Group",
  //   icon: Birlasoft_logo,
  //   iconBg: "#383E56",
  //   date: "May 2024 - July 2024",
  //   points: [
  //     "Creating a MERN Stack App from scratch. ",
  //     "Sucessfully created an JWT-Authenication System ",
  //     "Integration of Payment-gateway",

  //     // "Developing and maintaining web applications using React.js and other related technologies.",
  //     // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     // "Implementing responsive design and ensuring cross-browser compatibility.",
  //     // "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },

];

const testimonials = [];

const projects = [
  {
    name: "Blockchain-driven-Voting-System",
    description:
      " Developed a Voting System using blockchain principles to ensure tamper-proof election results.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: naarishakti,
    source_code_link: "https://tushar0777.github.io/Blockchain_VotingSystem/",
  },
  {
    name: "Custom Language Interpreter",
    description:
      "  Built an interpreter that includes variable declarations, arithmetic operations, conditionals, loops, and boolean expressions, using Python",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
     
      // {
      //   name: "",
      //   color: "pink-text-gradient",
      // },
    ],
    image: goodnight,
    source_code_link: "https://github.com/Tushar0777/My_script",
  },
  {
    name: "Personal Finance Management",
    description:
      "Developed a secure, scalable RESTful API for managing income, expenses, and budgets,Loans etc.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
    ],
    image: paisa,
    source_code_link: "https://documenter.getpostman.com/view/39300826/2sAYJ7fyvY",
  },
];

export { services, technologies, experiences, testimonials, projects };
