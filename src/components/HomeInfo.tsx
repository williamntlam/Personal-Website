import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const HomeInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black">
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
        a <a href="https://williams-reflections-8dt0g1jib-william-lams-projects.vercel.app/"><span className="text-emerald-400">blogsite</span></a> - a place where I
        <span className="text-blue-500"> share</span> my{" "}
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
            href="https://www.linkedin.com/in/william-lam-b3a8a2213/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-10 w-10 text-blue-700 hover:text-white"
            />
          </a>
          <a
            href=""
            className="bg-black text-white px-4 py-2 rounded border-2 border-white hover:bg-blue-900 text-center mt-4 sm:mt-0"
          >
            Resume
          </a>
          <a
            href=""
            className="bg-black text-white px-4 py-2 rounded border-2 border-white hover:bg-blue-900 text-center mt-4 sm:mt-0"
          >
            Projects
          </a>
          <a
            href="https://devpost.com/williamntlam"
            className="bg-black text-white px-4 py-2 rounded border-2 border-white hover:bg-blue-900 text-center mt-4 sm:mt-0"
          >
            Devpost
          </a>
          <a
            href="https://williams-reflections-8dt0g1jib-william-lams-projects.vercel.app/"
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
