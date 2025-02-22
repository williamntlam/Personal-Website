import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const projects = [
  {
    title: "Stud.io",
    description:
      "An intelligent flashcard generation app that transforms lecture notes and other study materials into interactive questions using AI, reinforcement learning, and vector search to optimize student learning. Shoutout to my teammates, Kevin and Liam!",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "Flask",
      "Python",
      "MongoDB Atlas",
      "OpenAI (LLM)"
    ],
    tools: [
      "OpenAI API (LLM-powered flashcard generation)",
      "Q-Learning (Reinforcement Learning for performance tracking)",
      "Vector Search (Cosine Similarity for similar questions)",
      "Real-time notifications for weak topics",
    ],
    link: "https://devpost.com/software/stud-io",
    achievements: ["NSBEUOFT Hacks 2025 - Winner (2nd Place)"],
    features: [
      "AI-generated flashcards from lecture notes, PDFs, and other study materials.",
      "Reinforcement learning with Q-tables to prioritize weaker topics.",
      "Vectorized flashcards for similarity-based retrieval using cosine similarity.",
      "Study Mode: Focuses on areas where students perform the worst.",
      "Review Mode: Strengthens general understanding of concepts.",
      "Real-time performance tracking and feedback from AI-powered evaluation.",
      "Instant notifications when students perform poorly in a subject.",
    ],
    image: "nsbe_hacks_win.png"
  },
  {
    title: "DriveInsight",
    description:
      "A cutting-edge system designed to enhance road safety using AI, Computer Vision, and gyroscope data. It analyzes driving behavior, offering meaningful insights and feedback to promote better driving habits and safer roads. I couldn't have made this without my amazing teammates: Aidan Yau, Elsie Chan, and Aidan Ng.",
    techStack: ["React Native", "Python", "Flask", "MongoDB Atlas"],
    tools: [
      "Roboflow (Computer Vision Models)",
      "Google Gemini (LLM)",
      "Auth0 (User Authentication)",
      "Google Cloud Storage",
      "Vector Search",
    ],
    link: "https://devpost.com/software/idk-1xupmo",
    achievements: ["HackThe6ix 2024 - Winner For Best Use Of MongoDB"],
    features: [
      "Real-time driving behavior analysis using Computer Vision and gyroscope data.",
      "Personalized insights and feedback powered by Google Gemini LLM.",
      "Secure user authentication via Auth0.",
      "Stores and analyzes driving trip metadata using MongoDB Atlas and Vector Search.",
      "Cloud integration for securely storing driving videos in Google Cloud Storage.",
    ],
    image: "/hack_the_six_win.jpg"
  },
  {
    title: "ProductivityMate",
    description:
      "A modern productivity web application designed to simplify and streamline daily tasks. Featuring a Calendar, Task Management, Reminders, and a Pomodoro Timer, ProductivityMate helps users stay organized and productive.",
    techStack: ["Next.js", "TypeScript", "Spring Boot", "Java", "Gradle"],
    tools: ["Tailwind CSS", "Integrated Calendar", "Pomodoro Timer"],
    link: "https://github.com/williamntlam/productivity-mate",
    features: [
      "Integrated Calendar: Plan and visualize daily tasks effortlessly.",
      "Task Management: Organize and prioritize workload effectively.",
      "Reminders: Never miss deadlines or important events.",
      "Pomodoro Timer: Helps maintain focus using the Pomodoro technique.",
      "Modern UI: Styled with Tailwind CSS for a responsive and sleek design.",
    ],
    image: ""
  },
  {
    title: "Scriptorium",
    description:
      "An innovative online platform that enables users to write, execute, and share code in multiple programming languages in a secure and intuitive environment.",
    techStack: ["Next.js", "React", "TypeScript", "Prisma ORM", "PostgreSQL"],
    tools: [
      "Docker (Secure Code Execution)",
      "Tailwind CSS (Styling)",
      "RESTful API",
      "JWT Authentication",
    ],
    link: "https://github.com/williamntlam/scriptorium",
    features: [
      "User Authentication: Secure login system using JWT.",
      "Code Editor: Syntax highlighting for multiple languages including C, C++, Java, Python, and JavaScript.",
      "Real-time Code Execution: Immediate output display with input support.",
      "Secure Sandboxing: Docker-based execution to prevent security vulnerabilities.",
      "Code Templates: Save, edit, search, and fork code snippets.",
      "Blog Posts: Create and interact with posts linked to code templates.",
      "Reporting System: Users can flag inappropriate content, sorted for moderation.",
      "Dark/Light Mode: UI supports theme toggling for better accessibility.",
      "Responsive Design: Works across all devices (desktop, tablet, mobile).",
    ],
    image: ""
  },
];

const HomeInfo = () => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black">
      {/* Full-Screen Modal */}
      {showProjects && (
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-start p-10 z-50 overflow-y-auto min-h-screen">
    
    {/* Close Button */}
    <button
      onClick={() => setShowProjects(false)}
      className="fixed top-8 left-8 text-white hover:text-red-500 text-2xl font-bold"
    >
      Exit
    </button>

    {/* Project List */}
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-black bg-opacity-60 text-white p-8 rounded-lg shadow-lg w-full border border-gray-600"
        >
          {/* Project Image (Only Display if Not Empty) */}
          {project.image && (
  <div className="w-full flex justify-center mb-6">
    <img
      src={project.image}
      alt={project.title}
      width="800"
      height="450"
      className="rounded-lg shadow-md object-cover"
    />
  </div>
)}


          {/* Project Title */}
          <h2 className="text-2xl font-bold mb-4 text-center">{project.title}</h2>

          {/* Description */}
          <p className="text-gray-300 text-base mb-4 text-center">{project.description}</p>

          {/* Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <div className="mb-4">
              <h3 className="text-yellow-400 font-semibold text-xl">🏆 Achievements</h3>
              <ul className="text-gray-400 text-base space-y-2">
                {project.achievements.map((achievement, i) => (
                  <li key={i}>- {achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-4">
            <h3 className="text-blue-400 font-semibold text-xl">🛠 Tech Stack</h3>
            <p className="text-gray-400 text-base">{project.techStack?.join(", ")}</p>
          </div>

          {/* Tools Used */}
          <div className="mb-4">
            <h3 className="text-green-400 font-semibold text-xl">🔧 Tools Used</h3>
            <ul className="text-gray-400 text-base space-y-2">
              {project.tools?.map((tool, i) => (
                <li key={i}>- {tool}</li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="mb-4">
            <h3 className="text-purple-400 font-semibold text-xl">🚀 Features</h3>
            <ul className="text-gray-400 text-base space-y-2">
              {project.features?.map((feature, i) => (
                <li key={i}>- {feature}</li>
              ))}
            </ul>
          </div>

          {/* Project Link */}
          {project.link && project.link !== "#" && (
            <div className="text-center mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-600 font-semibold text-lg"
              >
                🔗 View Project
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)}

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white pb-5">
        <center>
          <Typewriter
            words={["Hello!", "My name is William Lam :)", "Enjoy your stay!"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </center>
      </h1>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed font-montserrat w-full sm:w-3/4 lg:w-2/3 text-center px-2 sm:px-4">
        I'm currently a student at the{" "}
        <span className="text-blue-500"> University of Toronto </span> majoring
        in
        <span className="text-blue-500"> Computer Science </span> and{" "}
        <span className="text-blue-500"> Mathematics </span>. I'm deeply
        interested in{" "}
        <span className="text-yellow-400"> software development </span> and{" "}
        <span className="text-yellow-400"> AI </span> and I strongly believe in
        being a<span className="text-blue-500"> positive influence </span>
        everywhere I go. Through my interests and values, I hope to leave a
        <span className="text-blue-500"> positive impact </span>
        on the world and those around me. <br></br> <br></br>
        Please feel free to <span className="text-blue-500">explore</span> the
        <span className="text-yellow-400"> links </span> I've{" "}
        <span className="text-blue-500">shared</span> down below - This includes
        a{" "}
        <a href="https://williams-reflections.vercel.app/">
          <span className="text-emerald-400 hover:text-emerald-800">
            blogsite
          </span>
        </a>{" "}
        - a place where I<span className="text-blue-500"> share</span> my{" "}
        <span className="text-yellow-400">thoughts</span> and{" "}
        <span className="text-yellow-400">reflections</span> from my day to day
        life.
      </p>
      <div className="flex flex-col items-center pt-8 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
        <nav className="flex flex-col sm:flex-row sm:space-x-4">
          <a
            href="https://github.com/williamntlam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="h-10 w-10 text-gray-700 hover:text-white"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/william-nhut-lam-b3a8a2213/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-10 w-10 text-blue-700 hover:text-white"
            />
          </a>
          <button
            onClick={() => {
              setShowProjects((prev) => {
                console.log(!prev);
                return !prev;
              });
            }}
            className="bg-black text-white px-4 py-2 rounded border-2 border-white hover:bg-blue-900 text-center mt-4 sm:mt-0"
          >
            Projects
          </button>
          <a
            href="https://devpost.com/williamntlam"
            className="bg-black text-white px-4 py-2 rounded border-2 border-white hover:bg-blue-900 text-center mt-4 sm:mt-0"
          >
            Devpost
          </a>
          <a
            href="https://williams-reflections.vercel.app/"
            className="bg-black text-white px-4 py-2 rounded border-2 border-white hover:bg-blue-900 text-center mt-4 sm:mt-0"
          >
            Blogsite
          </a>
        </nav>
      </div>
    </div>
  );
};

export default HomeInfo;
