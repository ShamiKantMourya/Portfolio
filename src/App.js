
import About from './Components/About';
import Contact from './Components/Contact';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Skills from './Components/Skills';
import SocialIcons from './Components/SocialIcons';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <HomePage />
      <About />
      <Project />
      <Skills />
      <Contact />
      <SocialIcons />
    </div>
  );
}

export default App;
