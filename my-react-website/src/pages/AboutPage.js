import React from 'react';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AboutPage = () => (
  <React.Fragment>

    <h1 className="page-title">About Me</h1>
    <img className="aboutImg" src={require('../imgs/photo.jpg')} alt="profile of me"/>
    <section>
      <p>
        Hello World!
      </p>
      <p>
        My name is Megan Laurie. I am a Developer, Designer, and Illustrator. I design and build things on the internet. I create user friendly websites that something something something…
      </p>
      <p>
        I have experience with HTML5.1, CSS3, React.js, SASS/Less/PostCSS, Photoshop, Illustrator, After Effects*, Sketch, Node.js, Bootstrap V#?, NPM/Yarn/Bower, Webpack/Gulp/Grunt, Wordpress, RWD/W3C/ARIA/WCAG, GIT/CVS, REST APIs. I am currently seeking new opportunities in Frontend and UI Development. Available for hire on a full-time basis.
      </p>
      <p>
        I live and work in a vibrant neighbourhood in downtown Calgary, AB. When I'm not working, I love a good bubble tea, reading in my hammock, working in my garden, and doing puzzles.
      </p>
      <p>
        Check out my GitHub, Codepen, and Dribble to see some of my work.
      </p>
    </section>
    <section className="icon-container">
        <a className="fa-icon about-icon" target="_blank" rel="noopener noreferrer" href="https://github.com/meglaurie"><FontAwesomeIcon icon={faGithubAlt} /></a>
        <a className="fa-icon about-icon" target="_blank" rel="noopener noreferrer" href="https://codepen.io/mlaur568"><FontAwesomeIcon icon={faCodepen} /></a>
        <a className="fa-icon about-icon" target="_blank" rel="noopener noreferrer" href="https://dribbble.com/mlaurie"><FontAwesomeIcon icon={faDribbble} /></a>
        <a className="fa-icon about-icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/megan-laurie"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a className="fa-icon about-icon" target="_blank" rel="noopener noreferrer" href="mailto:megan@meganlaurie.ca"><FontAwesomeIcon icon={faEnvelope} /></a>
    </section>
  </React.Fragment>

);

export default AboutPage;
