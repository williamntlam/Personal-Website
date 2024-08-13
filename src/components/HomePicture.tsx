import profilePicture from "/homePicture.jpg";

const HomePicture = () => {
  return (
    <div className="w-full h-48 md:h-auto">
      <img
        src={profilePicture}
        alt="Nice picture for the home page."
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HomePicture;
