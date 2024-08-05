import { Typewriter } from 'react-simple-typewriter';

const HomeInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black">
      <h1 className="text-4xl font-bold text-white pb-5">
        <center>
          <Typewriter
            words={['Hello!', 'My name is William Lam :)', 'Enjoy your stay!']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </center>
      </h1>
      <div className="flex-grow flex items-start justify-center w-full pt-8">
        <p className="text-white leading-relaxed font-montserrat w-2/3 text-center">
          I'm currently a student at the University of Toronto majoring in
          Computer Science and Mathematics. I'm deeply interested in software
          development and AI and I strongly believe in being a positive influence everywhere I go.
          Through my interests and values, I hope to leave a positive impact on the world and those around me.
        </p>
      </div>
    </div>
  );
};

export default HomeInfo;
