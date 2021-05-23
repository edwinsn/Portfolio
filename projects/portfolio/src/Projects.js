import naGif from './assets/images/na.gif'
import paGif from './assets/images/pa.gif'
import mcGif from './assets/images/mc.gif'
import './assets/projects.css'

export let Projects = function () {

    return (
        <section className="projects" id="projects">
            <div>
                <div>
                    <a className="projectTitle" href="https://purchase-analysis-23370.web.app/" rel="noreferrer" target="_blank">Purchase Analysis</a>
                    <p className="projectDescription">Throughout the month we usually spend our money according to what
                    is needed at the moment and by the end of the month, we don't
                    remember if all our purchases were smart or really necessary.
                    This app lets you save your purchase online data and shows you some
                    histograms so you can analyze how you are spending throughout the time,
                in different categories and in what range of prices you put your money.</p>
                </div>
                <a href="https://purchase-analysis-23370.web.app/" rel="noreferrer" target="_blank">
                    <img alt="Purchase analisys gif" src={paGif} />
                </a>
            </div>

            <div>
                <div>
                    <a className="projectTitle" href="https://miocid.herokuapp.com/" rel="noreferrer" target="_blank">MioCid</a>
                    <p className="projectDescription">If you have ever rescued an animal from the street, you will know what
                    loyalty and gratitude are. This application allows you to report where
                    you saw a stray animal and how often, besides find it if you want to feed or
                adopt it.</p>
                </div>
                <a href="https://miocid.herokuapp.com/" rel="noreferrer" target="_blank">
                    <img alt="Mio cid gif" src={mcGif} />
                </a>
            </div>
            <div >
                <div>
                    <a className="projectTitle" href="https://edwinsn.github.io/Search-NASA-images/" rel="noreferrer" target="_blank">NASA Multimedia Library clone</a>
                    <p className="projectDescription">This small application is a clone of the NASA Multimedia Library,
                   it allows you to search,  in a time interval,  for images or audio from NASA.</p>
                </div>
                <a href="https://edwinsn.github.io/Search-NASA-images/" rel="noreferrer" target="_blank">
                    <img alt="Nasa Multimedia clone gif" src={naGif} />
                </a>
            </div>
        </section>
    )
}