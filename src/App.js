
import About from './Components/About';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import SocialIcons from './Components/SocialIcons';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <About />

      <SocialIcons />
    </div>
  );
}

export default App;
