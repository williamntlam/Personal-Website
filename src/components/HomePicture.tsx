import profilePicture from "/homePicture.jpg";

const HomePicture = () => {
  return (
    <div className="flex-none w-1/2 h-auto">
      <img
        src={profilePicture}
        alt="Nice picture for the home page."
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-filter duration-300"
      />
    </div>
  );
};

export default HomePicture;
