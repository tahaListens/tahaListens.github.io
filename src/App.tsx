import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";

// App is the main component of the application
// It is responsible for rendering the layout and the main content of the application
// It uses the Layout component to provide a consistent layout for the application
function App() {
  return <Layout title= "tahaListens">
    <Hero />
  </Layout>;
  
}

export default App;
