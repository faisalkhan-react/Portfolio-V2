import { Container } from "./styles";
import FaisalKhan from "../../assets/FaisalKhan.jpg";
import tailwincss from "../../assets/tailwindcss.png";
import vite from "../../assets/Vite.js.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import netlify from "../../assets/netlify.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import redux from "../../assets/redux.svg";
import git from "../../assets/git.svg";
import firebase from "../../assets/firebase.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi, I'm Faisal Khan, a Frontend Developer passionate about creating
            fast, interactive, and user-friendly web applications. I focus on
            writing clean code, optimizing performance, and ensuring a seamless
            user experience across all devices.
          </p>
        </ScrollAnimation>
        <br />
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          My tech stack includes React.js, Redux, Context API, Firebase, Appwrite, Tailwind CSS, JavaScript, HTML/CSS, Vite, Git, GitHub, and VSCode. I also have knowledge of RESTful APIs, State Management, JWT authentication, OOPs, and DBMS. I'm always learning and exploring new technologies to enhance my skills and create better digital experiences.
          </p>
        </ScrollAnimation> */}
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>Let’s connect and build something amazing! 🚀 </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={redux} alt="redux" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={firebase} alt="firebase" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={git} alt="git" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={tailwincss} alt="TailwindCss" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={netlify} alt="netlify" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={vite} alt="vite" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img
            src={FaisalKhan}
            style={{
              borderRadius: "3%",
            }}
            alt="Faisal Khan"
          />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
