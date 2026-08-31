import {
  backend,
  creator,
  mobile,
  web,
  tripguide,
  LOGOMASTER,
  fstlogo,
  MyStudyMate,
  ParkinsonsDisease,
  PNP,
  fuzzy,
  CSS,
  cloud,
  briscola,
  ml,
  svd,
  dl,
  fer,
  amazon_sentiment,
  nttLogo,
  digiup,
  smartLogo,
  chat,
  teach,
  sehatoka
} from "../assets";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiHtml5,
  DiCss3,
  DiDart,
} from "react-icons/di";
import {
  SiPostgresql,
  SiCplusplus,
  SiTensorflow,
  SiScikitlearn,
  SiSqlite,
  SiKeras,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiStreamlit,
  SiSpringboot,
  SiLaravel,
  SiDocker,
  SiFastapi,
  SiApachehadoop,
  SiApachespark,
  SiTalend,
  SiMediapipe,
  SiApachekafka,
  SiGitlab,
  SiPytorch,
  SiHuggingface,
  SiLangchain,
  SiRedis,
  SiTypescript,
  SiLinux
} from "react-icons/si";
import { FaEye } from "react-icons/fa";

const technologies = [
  // AI & Machine Learning
  { name: "Python", icon: DiPython },
  { name: "PyTorch", icon: SiPytorch },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Transformers", icon: SiHuggingface },
  { name: "OpenCV", icon: SiOpencv },

  // Generative AI & Backend
  { name: "FastAPI", icon: SiFastapi },
  { name: "LangChain", icon: SiLangchain },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: DiMongodb },
  { name: "Redis", icon: SiRedis },
  { name: "Docker", icon: SiDocker },

  // Data Engineering
  { name: "Apache Kafka", icon: SiApachekafka },
  { name: "Apache Spark", icon: SiApachespark },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },

  // Development
  { name: "React", icon: DiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Java", icon: DiJava },
  { name: "C++", icon: SiCplusplus },
  { name: "Git", icon: DiGit },
  { name: "Linux", icon: SiLinux },
];
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Engineer",
    icon: creator,
  },
  {
    title: "Generative AI Engineer",
    icon: backend,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "Backend Engineer",
    icon: web,
  },
];

const experiences = [
  {
    title: "AI Engineer Intern – RAG & Enterprise Knowledge Systems",
    company_name: "NTT DATA",
    iconBg: "#FDFEFE",
    icon: nttLogo,
    date: "Feb 2026 - Jul 2026",
    points: [
      "Developed an enterprise knowledge assistant for Microsoft Teams using Retrieval-Augmented Generation (RAG) and SharePoint.",
      "Implemented hybrid information retrieval combining dense vector search and BM25 with intent routing and conversational context.",
      "Integrated secure document access using Microsoft Entra ID and role-based authorization to ensure users only retrieve permitted content.",
      "Built automated document ingestion and synchronization pipelines for enterprise files and structured data.",
      "Implemented citation validation and source-grounded responses to improve answer traceability and reliability.",
      "Developed the backend using FastAPI with PostgreSQL, Redis, Qdrant and Docker-based services.",
    ],
  },

  {
    title: "AI Developer Intern – Healthcare Platform",
    company_name: "DIGIUP",
    iconBg: "#FDFEFE",
    icon: digiup,
    date: "Jul 2025 - Aug 2025",
    points: [
      "Developed an AI-enhanced healthcare management platform designed to digitize hospital workflows and centralize patient records.",
      "Built real-time dashboards and smart scheduling features to improve coordination between patients, doctors and staff.",
      "Implemented AI-powered information retrieval and NLP components using Transformers, BERT, LangChain and RAG.",
      "Developed asynchronous backend workflows using FastAPI, Redis and Celery.",
      "Improved staff–patient interaction efficiency by 30–40% within participating hospital departments.",
    ],
  },

  {
    title: "Bachelor's Final Year Intern – Marketing Operations Platform",
    company_name: "Faculté des Sciences et Techniques de Tanger",
    iconBg: "#FDFEFE",
    date: "Apr 2024 - Jun 2024",
    icon: smartLogo,
    points: [
      "Developed a full-stack marketing operations management platform using the MEAN stack.",
      "Automated more than 60% of repetitive marketing operations and workflows.",
      "Implemented real-time analytics to support campaign monitoring and decision-making.",
      "Improved campaign management efficiency by approximately 40–50% through workflow automation.",
    ],
  },
];
const educations = [
  {
    title: "Master's Degree in Artificial Intelligence and Data Science",
    institution: "Faculté des Sciences et Techniques de Tanger",
    iconBg: "#FDFEFE",
    icon: LOGOMASTER,
    date: "2024 - 2026",
    points: [
      "Specialized in machine learning, deep learning, NLP, generative AI and data science.",
      "Developed AI systems involving RAG, information retrieval, LLM applications and predictive modeling.",
      "Worked on data engineering, big data processing and scalable AI architectures.",
    ],
  },
  {
    title: "Bachelor's Degree in Application Development Engineering",
    institution: "Faculté des Sciences et Techniques de Tanger",
    iconBg: "#FDFEFE",
    icon: fstlogo,
    date: "2022 - 2023",
    points: [
      "Focused on software engineering, backend development, database systems and application architecture.",
      "Developed full-stack web and mobile applications using modern development frameworks.",
    ],
  },
  {
    title: "DEUST in Mathematics, Computer Science, Physics and Chemistry",
    institution: "Faculté des Sciences et Techniques de Tanger",
    iconBg: "#FDFEFE",
    date: "2019 - 2022",
    points: [
      "Built a strong foundation in mathematics, computer science and scientific computing.",
      "Developed programming and problem-solving skills using Python, Java and C++.",
    ],
  },
];

const projects = [
{
    name: "Enterprise Knowledge Assistant for Microsoft Teams",
    view: "NaN",
    description:
      "An enterprise AI assistant built with Retrieval-Augmented Generation (RAG) to provide secure, source-grounded answers over organizational documents stored in SharePoint. The system combines hybrid retrieval, intent routing, reranking, identity-aware document access, and automated document ingestion.",
    tags: [
      {
        name: "RAG",
        color: "text-blue-500",
      },
      {
        name: "LLMs",
        color: "text-green-500",
      },
      {
        name: "Qdrant",
        color: "text-pink-500",
      },
      {
        name: "FastAPI",
        color: "text-yellow-500",
      },
      {
        name: "Microsoft Graph",
        color: "text-purple-500",
      },
    ],
    image: chat,
    source_code_link: "NaN",
  },

  {
    name: "Sehatoka – AI Healthcare Information Platform",
    view: "NaN",
    description:
      "An AI-powered healthcare platform designed to digitize hospital workflows and provide intelligent access to medical information. The system combines RAG, NLP, BERT-based models, and real-time backend services to support healthcare workflows, information retrieval, and interaction between healthcare users.",
    tags: [
      {
        name: "RAG",
        color: "text-blue-500",
      },
      {
        name: "BERT",
        color: "text-green-500",
      },
      {
        name: "LangChain",
        color: "text-pink-500",
      },
      {
        name: "FastAPI",
        color: "text-yellow-500",
      },
      {
        name: "Redis",
        color: "text-red-500",
      },
    ],
    image: sehatoka,
    source_code_link: "NaN",
  },

  {
    name: "Teach – Multilingual Learning Platform",
    view: "https://teach.rihaneaymanee.workers.dev/en",
    description:
      "A full-stack multilingual learning platform designed for students, teachers, and administrators. The platform supports English, French, and Arabic interfaces and provides course management, exercises, exams, private resources, subscriptions, enrollment workflows, and progress tracking.",
    tags: [
      {
        name: "React",
        color: "text-blue-500",
      },
      {
        name: "TypeScript",
        color: "text-green-500",
      },
      {
        name: "FastAPI",
        color: "text-pink-500",
      },
      {
        name: "PostgreSQL",
        color: "text-yellow-500",
      },
      {
        name: "Docker",
        color: "text-purple-500",
      },
    ],
    image: teach,
    source_code_link: "NaN",
  },
  {
  name: "Real-Time Facial Expression Recognition",
  view: "NaN",
  description:
    "A real-time facial expression recognition system using transfer learning and computer vision to classify facial expressions from images, videos and webcam streams. The project evaluates VGG16, VGG19 and EfficientNet architectures and provides real-time inference through OpenCV and Streamlit.",
  tags: [
    {
      name: "Deep Learning",
      color: "text-blue-500",
    },
    {
      name: "Computer Vision",
      color: "text-green-500",
    },
    {
      name: "TensorFlow",
      color: "text-red-500",
    },
    {
      name: "OpenCV",
      color: "text-pink-500",
    },
  ],
  image: fer,
  source_code_link:
    "https://github.com/aymanerihane/Real-Time-Face-Expression-Recognition",
},
  // {
  // name: "Cloud Infrastructure & OpenStack Deployment",
  // view: "NaN",
  // description:
  //   "This academic cloud computing project is divided into four major parts: designing a full CloudSim-based architecture for Abdelmalek Essaadi University, deploying and configuring an OpenStack cloud environment (including IaaS and SaaS implementations), automating VM provisioning using Terraform, and creating a complete Service Level Agreement (SLA) with a Python monitoring script to track OpenStack instance availability every 5 minutes. The project simulates real-world cloud infrastructure planning, deployment, automation, and monitoring.",
  // tags: [
  //   {
  //     name: "Cloud Computing",
  //     color: "text-blue-500",
  //   },
  //   {
  //     name: "OpenStack",
  //     color: "text-red-500",
  //   },
  //   {
  //     name: "Terraform",
  //     color: "text-green-500",
  //   },
  //   {
  //     name: "SLA Monitoring",
  //     color: "text-purple-500",
  //   },
  // ],
  // image: cloud, // mets ton image ici
  // source_code_link: "NaN", // mets le repo quand fini
  // },

  {
  name: "Real-Time Amazon Sentiment Analysis Pipeline",
  view: "NaN",
  description:
    "A real-time data engineering and sentiment analysis pipeline that streams Amazon Music reviews through Kafka, processes them with Apache Spark MLlib, stores results in MongoDB and visualizes live insights through a React dashboard.",
  tags: [
    {
      name: "Apache Kafka",
      color: "text-blue-500",
    },
    {
      name: "Apache Spark",
      color: "text-green-500",
    },
    {
      name: "Machine Learning",
      color: "text-red-500",
    },
    {
      name: "Docker",
      color: "text-purple-500",
    },
  ],
  image: amazon_sentiment,
  source_code_link:
    "https://github.com/aymanerihane/Real-Time-Amazon-Sentiment-Analysis-Pipeline",
},
  {
  name: "Hybrid Charged System Search & Genetic Algorithm for TSP",
  view: "NaN",
  description:
    "A hybrid metaheuristic optimization approach combining Charged System Search with Genetic Algorithm operators to solve the Travelling Salesman Problem. The implementation uses population-based optimization, ordered crossover and mutation for combinatorial search.",
  tags: [
    {
      name: "Optimization",
      color: "text-blue-500",
    },
    {
      name: "Genetic Algorithms",
      color: "text-green-500",
    },
    {
      name: "Metaheuristics",
      color: "text-pink-500",
    },
  ],
  image: CSS,
  source_code_link:
    "https://github.com/aymanerihane/TSP-ChargedSystemSearch-GA",
},
  {
    name: "Fuzzy CBR Approch of Value Engineering ",
    view: "NaN",
    description:
      "The approach assists experts during the creativity phase of Value Engineering (VE) by leveraging past experiences to avoid repeating solutions within a specific domain. It utilizes fuzzy case-based reasoning (CBR) combined with fuzzy clustering to efficiently retrieve relevant cases, reducing time complexity. The analogical nature of CBR, along with fuzzy theory, enables more accurate and systematic access to information during VE workshops. The method's performance has been tested using Traffic Accident dataset.",
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
    image: fuzzy,
    view : "https://www.linkedin.com/feed/update/urn:li:activity:7307081529623478272/?originTrackingId=oNCHM%2BVCQfuP%2BIe7t1ePpQ%3D%3D",
    source_code_link: "https://github.com/aymanerihane/Fuzzy_CBR_Approch_of_Value_Engineering",
  },
  {
  name: "Parkinson's Disease Prediction with Machine Learning",
  view: "NaN",
  description:
    "A machine learning classification system using vocal features to predict Parkinson's disease. The project combines feature selection with Logistic Regression, Random Forest and LightGBM models using ensemble voting to improve classification performance.",
  tags: [
    {
      name: "Machine Learning",
      color: "text-blue-500",
    },
    {
      name: "Feature Selection",
      color: "text-green-500",
    },
    {
      name: "Random Forest",
      color: "text-pink-500",
    },
    {
      name: "LightGBM",
      color: "text-yellow-500",
    },
  ],
  image: ParkinsonsDisease,
  source_code_link:
    "https://github.com/aymanerihane/Parkinson-s-disease-ML",
},
  // {
  //   name: "Briscola Moroccan card game",
  //   view: "NaN",
  //   description:
  //     "Design and development of a Moroccan card game in C++ using the Qt Framework. The game includes a GUI, an bot player. The project involved implementing the game logic, designing the GUI, and developing an bot player with 3 different deficulty.",
  //   tags: [
  //     {
  //       name: "C++",
  //       color: "text-blue-500",
  //     },
  //     {
  //       name: "Qt/QML Framework",
  //       color: "text-green-500",
  //     },
  //     {
  //       name: "Desktop App",
  //       color: "text-pink-500",
  //     },
  //   ],
  //   image: briscola,
  //   source_code_link: "https://github.com/aymanerihane/Card_Game_Briscola",
  // },
  // {
  //   name: "PNP : Professional Networking Platform",
  //   view: "NaN",
  //   description:
  //     "A professional networking platform for students, teachers, and businesses. Built with Django/Python for backend and HTML5/CSS for frontend. Facilitates profile creation, class management, project showcasing, and business connections. ",
  //   tags: [
  //     {
  //       name: "Django",
  //       color: "text-blue-500",
  //     },
  //     {
  //       name: "Python",
  //       color: "text-green-500",
  //     },
  //     {
  //       name: "GSAP",
  //       color: "text-pink-500",
  //     },
  //   ],
  //   image: PNP,
  //   source_code_link: "https://github.com/aymanerihane/Professional-Networking-Platform",
  // },
  // {
  //   name: "UniEvents",
  //   view: "NaN",
  //   description:
  //     "UniEvents is a Flutter application for tracking university events. It utilizes SQLite to store and manage data locally. Follow, schedule, and participate in university events, all from your mobile device. ",
  //   tags: [
  //     {
  //       name: "Flutter",
  //       color: "text-blue-500",
  //     },
  //     {
  //       name: "Mobile App",
  //       color: "text-green-500",
  //     },

  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/aymanerihane/UniEvents",
  // },
  // {
  //   name: "MyStudyMate",
  //   view: "NaN",
  //   description:
  //     "Dynamic web app for students and educators, employing PHP, MySQL, and Laravel. Key features include a robust communication hub, easy service access, timetable management, and event tracking. Importantly, we've opted for a customized front-end, avoiding frameworks like Bootstrap. ",
  //   tags: [
  //     {
  //       name: "Laravel",
  //       color: "text-blue-500",
  //     },
  //     {
  //       name: "Native CSS & JS",
  //       color: "text-green-500",
  //     },
  //   ],
  //   image: MyStudyMate,
  //   source_code_link: "https://github.com/aymanerihane/web-app-for-students-and-educators",
  // },
  // {
  //   name: "Image Compression using SVD",
  //   view: "NaN",
  //   description:
  //     "implementation of image compression using Singular Value Decomposition (SVD). The goal is to reduce the image size while retaining significant visual details by reconstructing it with a reduced number of singular values. ",
  //   tags: [
  //     {
  //       name: "Image Compression",
  //       color: "text-blue-500",
  //     },
  //     {
  //       name: "SVD",
  //       color: "text-green-500",
  //     },
  //   ],
  //   image: svd,
  //   source_code_link: "https://github.com/aymanerihane/Image-Compression-using-SVD",
  // },
  // {
  //   name: "Interactive-Machine-Learning-Toolkit",
  //   description:
  //     "An interactive machine learning toolkit built with CustomTkinter, featuring a user-friendly GUI for data processing, visualization, and model building. The application includes functionalities like customizable widgets, dynamic target selection, data upload options, and result exporting with visually appealing designs. ",
  //   tags: [
  //     {
  //       name: "Python",
  //       color: "text-blue-500",
  //     },
  //     {
  //       name: "CustomTkinter",
  //       color: "text-green-500",
  //     },
  //     {
  //       name: "Machine Learning",
  //       color: "text-pink-500",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "Machine-Learning-From-Scratch ",
  // },
  {
  name: "Machine Learning Toolkit",
  view: "NaN",
  description:
    "An interactive Python toolkit for exploring machine learning workflows, including dataset preprocessing, feature selection, model training, evaluation and result visualization through a desktop interface.",
  tags: [
    {
      name: "Python",
      color: "text-blue-500",
    },
    {
      name: "Machine Learning",
      color: "text-green-500",
    },
    {
      name: "CustomTkinter",
      color: "text-pink-500",
    },
  ],
  image: ml,
  source_code_link:
    "https://github.com/aymanerihane/Machine-Learning-From-Scratch",
},
  // {
  //   name: "Deep learning projects",
  //   view: "NaN",
  //   description:
  //     "A collection of deep learning projects built with TensorFlow and Keras, focused on tasks like classification and prediction. Each project includes data preprocessing, model training, evaluation, and visualizations. Designed for learning, experimentation, and showcasing practical skills in deep learning. ",
  //   tags: [
  //     {
  //       name: "Deep Learning",
  //       color: "text-blue-500",
  //     },
  //     {
  //       name: "CNN",
  //       color: "text-green-500",
  //     },
  //     {
  //       name: "ANN",
  //       color: "text-pink-500",
  //     },
  //   ],
  //   image: dl,
  //   source_code_link: "https://github.com/aymanerihane/Deep_learning_projects",
  // },

];

export { services, technologies, experiences, projects, educations };
