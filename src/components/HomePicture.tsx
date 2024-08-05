import profilePicture from "../../public/homePicture.jpg"

const HomePicture = () => {
  return (
    <div className="w-1/2 h-auto">
      <img src={profilePicture} alt="Nice picture for the home page." className="w-full h-auto"/>
    </div>
  )
}

export default HomePicture
