import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css"
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Aysegul </h2>
      
      <div className="prompt">
        <p> A frontend developer with a passion for learning and creating..</p>
        <LinkedInIcon />
        <EmailIcon />
        <GithubIcon />

        </div>
      </div>
      
      <div className="skills">
        <h2>Skills</h2>
        <ol className="list">
          <li className="item">
            <h2>Front-End Technologies</h2>
            <span> ReactJS, Angular, Redux, HTML, CSS, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</span>
          </li>

          <li className="item">
            <h2>Responsive Design</h2>
            <span>Creating mobile-friendly interfaces, using HTML5/CSS3 for adaptive layouts, and responsive design frameworks like Bootstrap. Adopts a mobile-first approach, employs media queries, and ensures cross-browser compatibility. Utilizes CSS grid/flexbox for layouts, tests/debugs across browsers/devices, and optimizes images for performance.</span>
          </li>

          <li className="item">
            <h2>Version Control</h2>
            <span>Using Git for efficient source code management,command-line proficiency in Git for streamlined version control processes</span>
          </li>

        </ol>
      </div>
    </div>
  )
}

export default Home
