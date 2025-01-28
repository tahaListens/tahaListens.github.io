import './App.css'
import Navbar from './components/Navbar'
import Headshot from './components/Headshot'
import Links from './components/Links'

function App() {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <Headshot />
      <Links />
    </div>
  );

}

export default App
