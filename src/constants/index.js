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
    briscola,
    ml,
    svd,
    dl,
  } from "../assets";
  import {
    DiRasberryPi,
    DiJavascript1,
    DiReact,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiPhp,
    DiMysql,
    DiHtml5,
    DiCss3,
    DiDart,
    DiDjango,

  } from "react-icons/di";
  import {
    SiArduino,
    SiPostgresql,
    SiCplusplus ,
    SiTensorflow,
    SiScikitlearn,
    SiSqlite,
    SiKeras,
    SiOpencv,
    SiPandas,
    SiNumpy,
    // SiMatplotlib,
    // SiSeaborn,
    SiStreamlit,
    SiAngular,
    SiSpringboot,
    SiLaravel,
    SiDocker,
    SiFlask,
    SiFastapi,
  } from "react-icons/si";

  const technologies = [
    { name: "Python", icon: DiPython },
    { name: "C++", icon: SiCplusplus },
    { name: "PHP", icon: DiPhp },
    { name: "Java", icon: DiJava },
    { name: "SQL", icon: SiPostgresql },
    { name: "React", icon: DiReact },
    { name: "Django", icon: DiDjango },
    { name: "Dart", icon: DiDart },
    { name: "T-SQL", icon: SiPostgresql },
    { name: "SQLite", icon: SiSqlite },
    { name: "MySQL", icon: DiMysql },
    { name: "MongoDB", icon: DiMongodb },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "Scikit-learn", icon: SiScikitlearn },
    { name: "Keras", icon: SiKeras },
    { name: "OpenCV", icon: SiOpencv },
    { name: "Pandas", icon: SiPandas },
    { name: "NumPy", icon: SiNumpy },
    // { name: "Matplotlib", icon: SiMatplotlib },
    // { name: "Seaborn", icon: SiSeaborn },
    { name: "HTML", icon: DiHtml5 },
    { name: "Streamlit", icon: SiStreamlit },
    { name: "CSS", icon: DiCss3 },
    { name: "JavaScript", icon: DiJavascript1 },
    { name: "Angular", icon: SiAngular },
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "Laravel", icon: SiLaravel },
    { name: "Git", icon: DiGit },
    { name: "Docker", icon: SiDocker },
    { name: "Flask", icon: SiFlask },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Arduino", icon: SiArduino },
    { name: "RasberryPi", icon: DiRasberryPi },
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
  
  const experiences = [
    {
      title: "Master in Artificial Intelligence and Data Science",
      institution: "Faculté Des Sciences et Techniques Tanger",
      iconBg: "#E6DEDD",
      icon: LOGOMASTER,
      date: "2024 - 2025 (En cours)",
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
      name: "Fuzzy CBR Approch of Value Engineering ",
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
      image: ParkinsonsDisease,
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
      image: briscola,
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
      image: PNP,
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
      image: MyStudyMate,
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
  
  export { services, technologies, experiences, projects };