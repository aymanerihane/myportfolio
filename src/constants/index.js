import {
    backend,
    creator,
    mobile,
    web,
    meta,
    shopify,
    tesla,
    carrent,
    jobit,
    tripguide,
    chu
  } from "../assets";
  import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
  } from "react-icons/di";
  import {
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiSolidity,
    SiPostgresql,
  } from "react-icons/si";
  import { TbBrandGolang } from "react-icons/tb";

  
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Analyst",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "IA Ingenier",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: DiJavascript1,
    },
    {
      name: "TypeScript",
      icon: DiJavascript1,
    },
    {
      name: "HTML",
      icon: DiJavascript1,
    },
    {
      name: "CSS",
      icon: DiJavascript1,
    },
    {
      name: "React",
      icon: DiReact,
    },
    {
      name: "Redux",
      icon: DiReact,
    },
    {
      name: "Tailwind CSS",
      icon: DiJavascript1,
    },
    {
      name: "Node.js",
      icon: DiNodejs,
    },
    {
      name: "MongoDB",
      icon: DiMongodb,
    },
    {
      name: "Git",
      icon: DiGit,
    },
    {
      name: "Figma",
      icon: DiJavascript1,
    },
    {
      name: "Docker",
      icon: DiJavascript1,
    },
    {
      name: "Three.js",
      icon: DiJavascript1,
    },
    {
      name: "Python",
      icon: DiPython,
    },
    {
      name: "Java",
      icon: DiJava,
    },
    {
      name: "Redis",
      icon: SiRedis,
    },
    {
      name: "Firebase",
      icon: SiFirebase,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
    },
    {
      name: "Solidity",
      icon: SiSolidity,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      name: "Golang",
      icon: TbBrandGolang,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "CHU",
      icon: chu,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Fuzzy CBR Approch of Value Engineering ",
      description:
        "Fuzzy Clustered Case-Based Reasoning System: Development of a machine learning framework that enhances traditional Case-Based Reasoning (CBR) using fuzzy clustering. The system partitions a case base into overlapping fuzzy clusters to improve knowledge retrieval, reduce computational costs, and enhance decision-making accuracy.",
      tags: [
        {
          name: "Fuzzy Clustering",
          color: "text-blue-500",
        },
        {
          name: "CBR",
          color: "text-green-500",
        },
        {
          name: "Value Engineering",
          color: "text-pink-500",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/aymanerihane/Fuzzy_CBR_Approch_of_Value_Engineering",
    },
    {
      name: "Parkinson’s Disease Prediction with Machine Learning From scratch",
      description:
        "This project uses vocal features and an Ensemble Feature Selection Algorithm (EFSA) to enhance Parkinson’s disease classification. Optimized models (Logistic Regression, Random Forest, LightGBM) are combined in a majority-vote ensemble, improving accuracy and robustness for early diagnosis, particularly in telemedicine.",
      tags: [
        {
          name: "Logistic Regression",
          color: "text-blue-500",
        },
        {
          name: "Random Forest",
          color: "text-green-500",
        },
        {
          name: "LightGBM",
          color: "text-pink-500",
        },
        {
          name: "vocal features",
          color: "text-yellow-500", 
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/aymanerihane/Parkinson-s-disease-ML",
    },
    {
      name: "Briscola Moroccan card game",
      description:
        "Design and development of a Moroccan card game in C++ using the Qt Framework. The game includes a GUI, an bot player. The project involved implementing the game logic, designing the GUI, and developing an bot player with 3 different deficulty.",
      tags: [
        {
          name: "C++",
          color: "text-blue-500",
        },
        {
          name: "Qt/QML Framework",
          color: "text-green-500",
        },
        {
          name: "Desktop App",
          color: "text-pink-500",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/aymanerihane/Card_Game_Briscola",
    },
    {
      name: "PNP : Professional Networking Platform",
      description:
        "A professional networking platform for students, teachers, and businesses. Built with Django/Python for backend and HTML5/CSS for frontend. Facilitates profile creation, class management, project showcasing, and business connections. ",
      tags: [
        {
          name: "Django",
          color: "text-blue-500",
        },
        {
          name: "Python",
          color: "text-green-500",
        },
        {
          name: "GSAP",
          color: "text-pink-500",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "UniEvents",
      description:
        "UniEvents is a Flutter application for tracking university events. It utilizes SQLite to store and manage data locally. Follow, schedule, and participate in university events, all from your mobile device. ",
      tags: [
        {
          name: "Flutter",
          color: "text-blue-500",
        },
        {
          name: "Mobile App",
          color: "text-green-500",
        },

      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "MyStudyMate",
      description:
        "Dynamic web app for students and educators, employing PHP, MySQL, and Laravel. Key features include a robust communication hub, easy service access, timetable management, and event tracking. Importantly, we've opted for a customized front-end, avoiding frameworks like Bootstrap. ",
      tags: [
        {
          name: "Laravel",
          color: "text-blue-500",
        },
        {
          name: "Native CSS & JS",
          color: "text-green-500",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/aymanerihane/web-app-for-students-and-educators",
    },
    {
      name: "Image Compression using SVD",
      description:
        "implementation of image compression using Singular Value Decomposition (SVD). The goal is to reduce the image size while retaining significant visual details by reconstructing it with a reduced number of singular values. ",
      tags: [
        {
          name: "Image Compression",
          color: "text-blue-500",
        },
        {
          name: "SVD",
          color: "text-green-500",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/aymanerihane/Image-Compression-using-SVD",
    },
    {
      name: "Interactive-Machine-Learning-Toolkit",
      description:
        "An interactive machine learning toolkit built with CustomTkinter, featuring a user-friendly GUI for data processing, visualization, and model building. The application includes functionalities like customizable widgets, dynamic target selection, data upload options, and result exporting with visually appealing designs. ",
      tags: [
        {
          name: "Python",
          color: "text-blue-500",
        },
        {
          name: "CustomTkinter",
          color: "text-green-500",
        },
        {
          name: "Machine Learning",
          color: "text-pink-500",
        },
      ],
      image: tripguide,
      source_code_link: "Machine-Learning-From-Scratch ",
    },
    {
      name: "Machine-Learning-From-Scratch ",
      description:
        "An interactive machine learning toolkit built with CustomTkinter, featuring a user-friendly GUI for data processing, visualization, and model building. The application includes functionalities like customizable widgets, dynamic target selection, data upload options, and result exporting with visually appealing designs. ",
      tags: [
        {
          name: "Machine Learning",
          color: "text-blue-500",
        },
        {
          name: "From Scratch",
          color: "text-green-500",
        },

      ],
      image: tripguide,
      source_code_link: "https://github.com/aymanerihane/Machine-Learning-From-Scratch",
    },
    {
      name: "Deep_learning_projects",
      description:
        "A collection of deep learning projects built with TensorFlow and Keras, focused on tasks like classification and prediction. Each project includes data preprocessing, model training, evaluation, and visualizations. Designed for learning, experimentation, and showcasing practical skills in deep learning. ",
      tags: [
        {
          name: "Deep Learning",
          color: "text-blue-500",
        },
        {
          name: "CNN",
          color: "text-green-500",
        },
        {
          name: "ANN",
          color: "text-pink-500",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/aymanerihane/Deep_learning_projects",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };