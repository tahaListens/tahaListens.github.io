import Navbar from "./components/Navbar";
import Headshot from "./components/Headshot";
import Links from "./components/Links";
import Background from "./components/StarsBackground";

function App() {
  return (
    <div className="min-h-screen relative">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Headshot />
        <Links />
      </div>
    </div>
  );
}

export default App;
