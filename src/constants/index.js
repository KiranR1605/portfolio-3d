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
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  bootstrap,
  nextjs,
  coincent,
  sparks,
  codeclause,
  udemy,
  marketplace,
  shareme,
  restaurant,
  bank,
  gpt3,
  scholarship,
} from "../assets"

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
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python Programmer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
]

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
    name: "TypeScript",
    icon: typescript,
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
    name: "git",
    icon: git,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  }
]

const internships = [
  {
    title: "Web Development Intern",
    company_name: "Coincent",
    icon: coincent,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Dec 2022",
    points: [
      "Studied user requirements to gain strong understanding of project initiatives and deadlines.",
      "Attended development programs to gain competencies and boost skills set.",
      "Prioritized and problem-solved several tasks concurrently with minimum supervision.",
      "Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS3.",
    ],
  },
  {
    title: "Data Science and Business Analytics Intern",
    company_name: "Sparks Foundation",
    icon: sparks,
    iconBg: "#383E56",
    date: "Feb 2023 - Mar 2023",
    points: [
      "Completed data cleaning and data validation of existing spreadsheets to promote robust data management platform, resulting in accurate data analysis and entry.",
      "Identified, analyzed, and interpreted trends or patterns in complex data sets by finding correlations and visualizing with charts.",
      "Monitored and controlled data upload, checking for successful data import and quality.",
      "Created data models to support decision-making processes.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "CodeClause",
    icon: codeclause,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Present",
    points: [
      "Studied user requirements to gain strong understanding of project initiatives and deadlines.",
      "Attended development programs to gain competencies and boost skills set.",
      "Prioritized and problem-solved several tasks concurrently with minimum supervision.",
      "Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS3.",
    ],
  }
]

const courses = [
  {
    domain: "Web Development",
    name: "Web development workshop",
    platform: "Coincent",
    date: "Aug 2022 - Oct 2022",
    image: coincent,
  },
  {
    domain: "Web Development",
    name: "The Complete 2023 Web Development Bootcamp",
    platform: "Udemy",
    date: "Oct 2022 - Feb 2023",
    image: udemy,
  },
  {
    domain: "Python",
    name: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
    platform: "Udemy",
    date: "Apr 2023 - Present",
    image: udemy,
  },
  {
    domain: "Machine Learning",
    name: "Machine Learning A-Z: AI, Python",
    platform: "Udemy",
    date: "May 2023 - Present",
    image: udemy,
  }
]

const projects = [
  {
    name: "Marketplace",
    description:
      "Web-based platform that offers a wide range of features such as product pages, shopping cart, payment gateway integration, and order tracking. Customers can browse and purchase products from the website.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "orange-text-gradient"
      }
    ],
    image: marketplace,
    source_code_link: "https://github.com/KiranR1605/marketplace-sanity-stripe",
    demo: "http://headphones-marketplace-rk.vercel.app"
  },
  {
    name: "Share-Me",
    description:
      "Web application that enables users to share content, engage with other users, and build online communities. It provides features such as profiles, news feeds and sharing, downloading and commenting on feeds.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shareme,
    source_code_link: "https://github.com/KiranR1605/Share-Me",
    demo: "http://share-me-rk.netlify.com"
  },
  {
    name: "Bank",
    description:
      "A simple and responsive single page website with modern UI/UX, which gives a comprehensive detail about the services, deals and offers provided by the bank and a number of trustworthy testimonials.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/KiranR1605/bank",
    demo: "https://bank-rk.vercel.app/"
  },
  {
    name: "Restaurant",
    description:
      "A simple and responsive single page website with modern UI/UX, which gives a comprehensive detail about the restaurant, head-chef and the menu.It also consists os a intro video, galley and a way to contact.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://github.com/KiranR1605/restaurant",
    demo: "https://restaurant-rk.vercel.app/"
  },
  {
    name: "GPT-3",
    description:
      "A simple and responsive single page website with modern UI/UX and navigation, which gives a comprehensive detail about the AI and how the AI will be in the future and a few articles on the AI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link: "https://github.com/KiranR1605/gpt-3",
    demo: "https://gpt3-rk.netlify.app/"
  },
  {
    name: "Scholarship",
    description:
      "A website where students can apply for scholarships based on the eligibility, the admin can manage (add, delete and modify) the scholarships and can view the details of the applied candidates.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: scholarship,
    source_code_link: "https://github.com/KiranR1605/Scholarship_website",
    demo: ""
  },
]

export { services, technologies, internships, courses, projects }
