import React from 'react';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AboutPage = () => (
  <React.Fragment>
  <main className="">
      <section>
        <h1 className="page-title">About Me</h1>
        <img className="aboutImg" src={require('../imgs/photo.jpg')} alt="profile of me"/>
        <p>
          Hello World!
        </p>
        <p>
          My name is Megan Laurie. I am a Frontend Developer and Designer. I design and build things on the internet. I create user friendly websites and applications that are both functional and aesthetically pleasing.
        </p>
        <p>
          I have 3 years of experience working with Node.js, Bootstrap, NPM/Yarn/Bower, Webpack/Gulp/Grunt, Wordpress, RWD/W3C/ARIA/WCAG, GIT/CVS, REST APIs. My strongest skills include HTML5.1, CSS3, React.js, SASS/Less/PostCSS, Photoshop, Illustrator, and Sketch. I thrive in roles that allow me to utilize both my design and development skills.  I am currently seeking new opportunities in the area of Frontend and UI Development.
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
    </main>

  </React.Fragment>

);

export default AboutPage;
