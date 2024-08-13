import HomePicture from "./components/HomePicture";
import HomeInfo from "./components/HomeInfo";

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <HomePicture />
      <HomeInfo />
    </div>
  );
}

export default App;
