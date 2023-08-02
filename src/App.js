
import About from './Components/About';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Skills from './Components/Skills';
import SocialIcons from './Components/SocialIcons';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <About />
      <Project />
      <Skills />
      <SocialIcons />
    </div>
  );
}

export default App;
