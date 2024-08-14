import HomePicture from "./components/HomePicture";
import HomeInfo from "./components/HomeInfo";

function App() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <HomePicture />
      <HomeInfo />
    </main>
  );
}

export default App;
