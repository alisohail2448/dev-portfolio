import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "TruResume App & Web App",
    description:
      "I developed TruResume, a mobile app utilizing blockchain (Indy) to issue tamper-proof academic credentials, ensuring the secure verification of achievements. I led the development of a React Native app with a Node.js backend, integrating an AI-driven resume builder, Digilocker, and drive for secure documents. By utilizing TypeScript in React Native, I enhanced code quality and scalability. I also implemented features such as a resume builder and credential management to provide a seamless user experience.",
    tools: [
      "React Native",
      "TypeScript",
      "Redux",
      "Razorpay SDK & APIs",
      "Digilocker APIs",
      "OpenAI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Web View",
      "SSE",
    ],
    role: "Full Stack Developer",
    code: "",
    link: "https://linkmix.co/21418172",
    image: crefin,
  },
  {
    id: 2,
    name: "Dev Finder Pair Programming",
    description:
      "I designed and implemented a multi-user collaboration system with dynamic room management and participant controls, incorporating secure authentication via NextAuth.js and modern UI components with Shadcn and Tailwind CSS. I also created a robust pair programming web app using Next.js and TypeScript, featuring interactive functionalities such as real-time screen sharing, video calls, and chat powered by Stream Chat.",
    tools: [
      "Next.js",
      "Shadcn",
      "Tailwind",
      "TypeScript",
      "NextAuth",
      "Stream Chat",
      "GetStream.io",
    ],
    role: "Full Stack Developer",
    code: "",
    link: "https://github.com/alisohail2448/dev-finder",
    image: travel,
  },
  {
    id: 3,
    name: "DeskOps, Task Management",
    description:
      "I spearheaded the development of a comprehensive Trello-like application utilizing modern web technologies including Next.js 14, React, Prisma, Stripe, Shadcn, Tailwind, and MySQL. I developed essential task and project management features, including authentication, organization management, board operations, list and card management, activity logging, and Stripe integration for subscriptions.",
    tools: [
      "Next.js 14",
      "React",
      "Prisma",
      "Stripe",
      "Shadcn",
      "Tailwind",
      "Docker",
      "PostgreSQL",
    ],
    code: "",
    role: "Full Stack Developer",
    link: "https://github.com/alisohail2448/DeskOps",
    image: realEstate,
  },
  {
    id: 4,
    name: "Genzza Ecommerce",
    description:
      "I evolved a modern e-commerce website, implementing robust authentication features, secure payment integration, and comprehensive admin control to enhance functionality and user experience. In the development process, I utilized React and Axios to optimize frontend API calls, ensuring efficient data retrieval and a smooth user interface. These enhancements significantly improved the overall performance and usability of the site.",
    tools: [
      "React.js",
      "Redux",
      "React Router",
      "Axios",
      "Material-UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JSON Web Tokens (JWT)",
      "Bcrypt",
      "React Hook Form",
      "Toast Notifications",
    ],
    code: "",
    link: "https://github.com/alisohail2448/genzza-ecommerce",
    image: ayla,
    role: "Full Stack Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
