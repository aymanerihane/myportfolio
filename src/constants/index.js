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
  SiGitlab
} from "react-icons/si";
import { FaEye } from "react-icons/fa";

const technologies = [
  { name: "Python", icon: DiPython },
  { name: "FastAPI", icon: SiFastapi },
  { name: "React", icon: DiReact },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Keras", icon: SiKeras },
  { name: "OpenCV", icon: SiOpencv },
  { name: "Mediapipe", icon: SiMediapipe },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Apache kafka", icon: SiApachekafka },
  { name: "Apache Spark", icon: SiApachespark },
  { name: "Apache Hadoop", icon: SiApachehadoop },
  { name: "Talend", icon: SiTalend },
  { name: "C++", icon: SiCplusplus },
  { name: "Java", icon: DiJava },
  { name: "Dart", icon: DiDart },
  { name: "Streamlit", icon: SiStreamlit },
  { name: "HTML", icon: DiHtml5 },
  { name: "CSS", icon: DiCss3 },
  { name: "JavaScript", icon: DiJavascript1 },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Git", icon: DiGit },
  { name: "Gitlab ", icon: SiGitlab },
  { name: "Docker", icon: SiDocker },
  { name: "T-SQL", icon: SiPostgresql },
  { name: "SQLite", icon: SiSqlite },
  { name: "MySQL", icon: DiMysql },
  { name: "MongoDB", icon: DiMongodb },

];
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
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
    title: "AI Ingenier",
    icon: creator,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: backend,
  },
];

const experiences = [
  {
    title: "Master in Artificial Intelligence and Data Science",
    institution: "Faculté Des Sciences et Techniques Tanger",
    iconBg: "#E6DEDD",
    icon: LOGOMASTER,
    date: "2024 - 2026 (En cours)",
    points: [
      "Studying advanced AI techniques, including machine learning, deep learning, and data analytics.",
      "Working on real-world AI applications and research projects.",
      "Developing expertise in big data processing and cloud computing.",
    ],
  },
  {
    title: "Licence in Application Development Engineering",
    institution: "Faculté Des Sciences et Techniques Tanger",
    iconBg: "#E6DEDD",
    date: "2022 - 2023",
    icon: fstlogo,
    points: [
      "Focused on software engineering, full-stack development, and system architecture.",
      "Worked on multiple projects using modern programming languages and frameworks.",
      "Gained experience in database management and cybersecurity.",
    ],
  },
  {
    title: "DEUST in Mathematics, Computer Science, Physics, and Chemistry (MIPC)",
    institution: "Faculté Des Sciences et Techniques Tanger",
    iconBg: "#E6DEDD",
    date: "2019 - 2022",
    icon: fstlogo,
    points: [
      "Built a strong foundation in mathematics, programming, and scientific computing.",
      "Developed problem-solving skills and logical reasoning in computational sciences.",
      "Worked on programming assignments using Python, Java, and C++.",
    ],
  },
];
const educations = [
  {
    title: "Master in Artificial Intelligence and Data Science",
    institution: "Faculté Des Sciences et Techniques Tanger",
    iconBg: "#E6DEDD",
    icon: LOGOMASTER,
    date: "2024 - 2026 (En cours)",
    points: [
      "Studying advanced AI techniques, including machine learning, deep learning, and data analytics.",
      "Working on real-world AI applications and research projects.",
      "Developing expertise in big data processing and cloud computing.",
    ],
  },
  {
    title: "Licence in Application Development Engineering",
    institution: "Faculté Des Sciences et Techniques Tanger",
    iconBg: "#E6DEDD",
    date: "2022 - 2023",
    icon: fstlogo,
    points: [
      "Focused on software engineering, full-stack development, and system architecture.",
      "Worked on multiple projects using modern programming languages and frameworks.",
      "Gained experience in database management and cybersecurity.",
    ],
  },
  {
    title: "DEUST in Mathematics, Computer Science, Physics, and Chemistry (MIPC)",
    institution: "Faculté Des Sciences et Techniques Tanger",
    iconBg: "#E6DEDD",
    date: "2019 - 2022",
    icon: fstlogo,
    points: [
      "Built a strong foundation in mathematics, programming, and scientific computing.",
      "Developed problem-solving skills and logical reasoning in computational sciences.",
      "Worked on programming assignments using Python, Java, and C++.",
    ],
  },
];

const projects = [

  {
    name: "Real-Time Face Expression Recognition",
    // view : "https://real-time-face-expression-recognition.streamlit.app",
    view: "NaN",
    description:
      "This facial expression recognition system leverages deep learning to detect and classify emotions from static images, video files, or real-time webcam input. It features pre-trained models such as VGG16, VGG19, and EfficientNet B7, offering a trade-off between speed and accuracy. Built with TensorFlow, OpenCV, and Streamlit, the system can recognize common expressions like happy, sad, angry, surprised, and neutral.",
    tags: [
      {
        name: "Deep Learning",
        color: "text-blue-500",
      },
      {
        name: "Facial Expression Recognition",
        color: "text-green-500",
      },
      {
        name: "Real-Time",
        color: "text-red-500",
      },
      {
        name: "FER",
        color: "text-pink-500",
      },
    ],
    image: fer,
    source_code_link: "https://github.com/aymanerihane/Real-Time-Face-Expression-Recognition",
  },
  {
  name: "Cloud Infrastructure & OpenStack Deployment",
  view: "NaN",
  description:
    "This academic cloud computing project is divided into four major parts: designing a full CloudSim-based architecture for Abdelmalek Essaadi University, deploying and configuring an OpenStack cloud environment (including IaaS and SaaS implementations), automating VM provisioning using Terraform, and creating a complete Service Level Agreement (SLA) with a Python monitoring script to track OpenStack instance availability every 5 minutes. The project simulates real-world cloud infrastructure planning, deployment, automation, and monitoring.",
  tags: [
    {
      name: "Cloud Computing",
      color: "text-blue-500",
    },
    {
      name: "OpenStack",
      color: "text-red-500",
    },
    {
      name: "Terraform",
      color: "text-green-500",
    },
    {
      name: "SLA Monitoring",
      color: "text-purple-500",
    },
  ],
  image: cloud, // mets ton image ici
  source_code_link: "NaN", // mets le repo quand fini
  },

  {
    name: "Real-Time Amazon Sentiment Analysis Pipeline",
    view: "NaN",
    description:
      "Developed a scalable real-time data pipeline that scrapes Amazon Music New Releases album reviews and performs sentiment analysis using Apache Spark MLlib. The system leverages Kafka for message streaming, MongoDB for data storage, and provides live sentiment insights through a React dashboard with WebSocket connections. Built with containerized microservices architecture using Docker Compose, the pipeline processes album reviews in real-time and delivers both live analytics and historical data export capabilities.",
    tags: [
      {
        name: "Apache Spark",
        color: "text-blue-500",
      },
      {
        name: "Kafka",
        color: "text-green-500",
      },
      {
        name: "MongoDB",
        color: "text-pink-500",
      },
      {
        name: "Docker",
        color: "text-yellow-500",
      },
      {
        name: "React",
        color: "text-purple-500",
      },
    ],
    image: amazon_sentiment, // You'll need to add this image
    source_code_link: "https://github.com/aymanerihane/amazon-sentiment-analysis",
  },
  {
    name: "Charged System Search Adapted Using GA for TSP ",
    view: "NaN",
    description:
      "This work presents an adaptation of the Charged System Search (CSS) algorithm with Genetic Algorithm to solve the well-known Travelling Salesman Problem (TSP). CSS, inspired by electrostatics and Newtonian mechanics, is a population-based meta- heuristic where each solution is considered as a charged particle. To handle the combi- natorial nature of TSP, we integrate CSS principles with Genetic Algorithm operators such as ordered crossover and mutation.",
    tags: [
      {
        name: "Charged System Search (CSS)",
        color: "text-blue-500",
      },
      {
        name: "CBR",
        color: "text-green-500",
      },
      {
        name: "Genetic Algorithms",
        color: "text-pink-500",
      },
    ],
    image: CSS,
    source_code_link: "https://github.com/aymanerihane/TSP-ChargedSystemSearch-GA",
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
    name: "Parkinson’s Disease Prediction with Machine Learning From scratch",
    view: "NaN",
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
    image: ParkinsonsDisease,
    source_code_link: "https://github.com/aymanerihane/Parkinson-s-disease-ML",
  },
  {
    name: "Briscola Moroccan card game",
    view: "NaN",
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
    image: briscola,
    source_code_link: "https://github.com/aymanerihane/Card_Game_Briscola",
  },
  {
    name: "PNP : Professional Networking Platform",
    view: "NaN",
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
    image: PNP,
    source_code_link: "https://github.com/aymanerihane/Professional-Networking-Platform",
  },
  {
    name: "UniEvents",
    view: "NaN",
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
    source_code_link: "https://github.com/aymanerihane/UniEvents",
  },
  {
    name: "MyStudyMate",
    view: "NaN",
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
    image: MyStudyMate,
    source_code_link: "https://github.com/aymanerihane/web-app-for-students-and-educators",
  },
  {
    name: "Image Compression using SVD",
    view: "NaN",
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
    image: svd,
    source_code_link: "https://github.com/aymanerihane/Image-Compression-using-SVD",
  },
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
    name: "Machine Learning From Scratch ",
    view: "NaN",
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
    image: ml,
    source_code_link: "https://github.com/aymanerihane/Machine-Learning-From-Scratch",
  },
  {
    name: "Deep learning projects",
    view: "NaN",
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
    image: dl,
    source_code_link: "https://github.com/aymanerihane/Deep_learning_projects",
  },

];

export { services, technologies, experiences, projects, educations };
