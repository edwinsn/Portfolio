import './assets/App.css';
import './assets/mainPage.css'
import './assets/about.css'
import {MainPage} from './MainPage'
import Progres from './progress'
import html from './assets/images/html5.svg'
import js from './assets/images/js.svg'
import react from './assets/images/react.svg'
import css from './assets/images/css.svg'

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
      <section className="about" id="about">
        <div className="aboutText">
          <p>About</p>
          <p>Some text</p>
        </div>
        <div className="skills">
          <div>
            <img src={js} alt="javascript"></img>
            Javascript
          </div>
          <div>
            <img src={css} alt="css"></img>
            css
          </div>
          <div>
            <img src={html} alt="Html"></img>
            Html
          </div>
          <div>
            <img src={react} alt="React"></img>
            React
          </div>
        </div>
      </section>
      <section id="projects">
        <div>Project1</div>
        <div>Project2</div>
        <div>Project3</div>
      </section>
      <section id="contact">Contact</section>
    </div>
  );
}

export default App;
