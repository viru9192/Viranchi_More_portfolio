// Header data
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://viru9192.github.io/Viranchi_More_portfolio",
  title: "VM",
};

// About data
const about = {
  name: "Viranchi More",
  role: "Data Analyst",
  description:
    "I am a passionate Full Stack Developer with expertise in building modern web applications. I love creating user-friendly interfaces and implementing robust backend solutions. With a strong foundation in both frontend and backend technologies, I strive to deliver high-quality, scalable applications that solve real-world problems.",
  resume:
    "https://drive.google.com/file/d/137jwlcoclhJ9QK8kefyvHz8D7Z8StTHl/view?usp=drive_link",
  social: {
    linkedin: "https://www.linkedin.com/in/viranchimore/",
    github: "https://github.com/viru9192",
  },
};

// Education data
const education = [
  {
    id: 'edu-1',
    name: 'State University of New York at Binghamton',
    description: 'Masters in Information Systems',
    stack: ['Aug 2024 - May 2026', 'GPA: 3.7/4.0'],
  },
  {
    id: 'edu-2',
    name: 'University of Mumbai',
    description: 'B.E. in Electronics Engineering',
    stack: ['Aug 2017 - Jun 2021', 'GPA: 7.4/10'],
  },
];

// Projects data
const projects = [
  {
    id: "proj-1",
    name: "Job Posting Analyzer – Fake Job Detection System",
    description:
      "Developed a machine learning pipeline to detect fraudulent job postings using NLP and classification models. Applied TF-IDF vectorization, feature engineering, and SMOTE to handle class imbalance (~95% real vs. 5% fake). XGBoost outperformed other models, achieving ~88% F1-score for fake class and >95% AUC. Deployed as an interactive Streamlit app with real-time predictions, confidence scores, and keyword impact analysis.",
    image: "/images/job-analyzer.jpg",
    stack: ["Python", "NLP", "Scikit-learn", "XGBoost", "SMOTE", "Streamlit"],
    github: "https://github.com/viru9192/job-posting-analyzer",
    live: "https://job-posting-analyzer.streamlit.app"
  },
  {
    id: "proj-2",
    name: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Flask. Features a contact form with email integration and smooth animations.",
    image: "/images/portfolio-project.jpg",
    stack: ["React", "Flask", "Styled Components", "Framer Motion"],
    github: "https://github.com/viru9192/Viranchi_More_portfolio",
    live: "https://viranchirmore.my.canva.site"
  },
  {
    id: "proj-3",
    name: "Project 2",
    description:
      "Description of your second project. Include key features and technologies used.",
    image: "/images/project2.jpg",
    stack: ["Tech Stack 1", "Tech Stack 2"],
    github: "https://github.com/viru9192/project2",
    live: "https://project2-demo.com"
  },
  {
    id: "proj-4",
    name: "Project 3",
    description:
      "Description of your third project. Include key features and technologies used.",
    image: "/images/project3.jpg",
    stack: ["Tech Stack 1", "Tech Stack 2"],
    github: "https://github.com/viru9192/project3",
    live: "https://project3-demo.com"
  }
];

// Skills data
const skills = [
  {
    id: "skill-1",
    name: "Frontend Development",
    icon: "fas fa-code",
    description: "React, JavaScript, HTML5, CSS3, Responsive Design",
  },
  {
    id: "skill-2",
    name: "Backend Development",
    icon: "fas fa-server",
    description: "Python, Flask, Node.js, Express, RESTful APIs",
  },
  {
    id: "skill-3",
    name: "Database",
    icon: "fas fa-database",
    description: "MongoDB, MySQL, PostgreSQL",
  },
  {
    id: "skill-4",
    name: "Tools & Others",
    icon: "fas fa-tools",
    description: "Git, Docker, AWS, CI/CD, Agile Methodologies",
  },
];

// Experience data
const experience = [
  {
    id: "exp-1",
    name: "Binghamton University",
    description:
      "Working as a Graduate Research Assistant at the Office of Institutional Research, contributing to statistical data analysis, report automation, and data visualization for institutional planning. Skilled in SQL, Excel, and Power BI for analytical reporting and process optimization.",
    stack: ["Binghamton, NY, USA", "Jan 2025 – Present"],
  },
  {
    id: "exp-2",
    name: "Tata Consultancy Services",
    description:
      "Worked as a System Engineer handling Oracle 12c/19c databases, complex SQL and PL/SQL development, performance tuning, and 24/7 production support for the State Bank of India. Led bulk data conversions, indexing strategies, and application maintenance in a Unix-Windows environment.",
    stack: ["Maharashtra, India", "Jun 2023 – Jun 2024"],
  },
  {
    id: "exp-3",
    name: "Tata Consultancy Services",
    description:
      "Served as an Assistant System Engineer focusing on database support, SQL optimization, technical documentation, and team collaboration for enterprise banking solutions. Delivered detailed reports and data extractions using Excel and PL/SQL.",
    stack: ["Mumbai, India", "Jun 2021 – Sep 2023"],
  },
  {
    id: "exp-4",
    name: "Unschool",
    description:
      "Interned as a Data Analyst using Excel and Power BI to analyze marketing campaign data, build interactive dashboards, and optimize SEO strategies, leading to measurable improvements in lead generation and web traffic.",
    stack: ["Mumbai, India", "Aug 2020 – Oct 2020"],
  },
  {
    id: "exp-5",
    name: "CITYFURNISH",
    description:
      "Worked as a Data Analyst Intern applying ML techniques to improve prediction accuracy, implementing Agile practices for better team collaboration, and delivering reports that enhanced marketing analytics and demand generation.",
    stack: ["Maharashtra, India", "Jul 2020 – Aug 2020"],
  },
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "viranchimore2112@gmail.com",
};

export { header, about, projects, skills, contact, education, experience };
