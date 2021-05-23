import html from './assets/images/html5.svg'
import js from './assets/images/js.svg'
import react from './assets/images/react.svg'
import css from './assets/images/css.svg'



export let About = function () {
    return (
        <section className="about" id="about">
        
            <div className="aboutText">
                <p>About</p>
                <p>When I was a child, there was a boy who was extremely good at calculations,
                once in a math class, we worked together and I discovered that by giving him
                a possible solution to the problem we were working, he could quickly
                implement it and in this way after rehearsing a couple of alternatives we came up with
                an idea whose result was a logical answer , unfortunately we were wrong.
                But since then I have thought that the combination of the power of calculation
               of machines and human creativity can do great things.</p>
                <p>Dounload Cv</p><br />
            </div>
            <div className="skills">
                <p>Skills</p>
                <div>
                    <img src={js} alt="javascript"></img>
                    <p>Javascript</p>
                </div>
                <div>
                    <img src={css} alt="css"></img>
                    <p>css</p>
                </div>
                <div>
                    <img src={html} alt="Html"></img>
                    <p>HTML</p>
                </div>
                <div>
                    <img src={react} alt="React"></img>
                    <p>React</p>
                </div>
            </div>
        </section>
    )
}