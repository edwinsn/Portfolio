import './assets/App.css';
import './assets/mainPage.css'
import './assets/about.css'
import {MainPage} from './MainPage'
import Progres from './progress'
import {About} from './About'
import {Projects} from './Projects'

function App() {
  console.log("Main Page rendened!")
  return (
    <div className="App">
      <div className="backGround">
        <div className="backGround0"></div>
        <div className="backGround1"></div>
        <div className="backGround2"></div>
      </div>
      <Progres />
      <MainPage />
      <About />
      <Projects />
      <section id="contact">Contact</section>
    </div>
  );
}

export default App;
