import React from 'react';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AboutPage = () => (
  <React.Fragment>
    <h1>Hello World!</h1>
    <img className="aboutImg" src={require('../imgs/photo.jpg')} alt="profile of me"/>
    <p>
    I’m Megan Laurie.

    I design and build things on the internet.

    I am a Developer, Designer, and Illustrator.

    I create user friendly websites that something something something…

    Bridge the gap between development and design*

    I have experience with HTML5.1, CSS3, React.js, SASS/Less/PostCSS, Photoshop, Illustrator, After Effects*, Sketch, Node.js, Bootstrap V#?, NPM/Yarn/Bower, Webpack/Gulp/Grunt, Wordpress, RWD/W3C/ARIA/WCAG, GIT/CVS, REST APIs,

    I am currently seeking new opportunities in Frontend and UI Development.

    Available for hire on a full-time basis.

    I live and work in a vibrant neighbourhood in downtown Calgary, AB.

    I love a good bubble tea, reading in my hammock, working in my garden, and doing puzzles.

    I am making a new portfolio to demonstrate some new skills I have learned in lock down. *

    Check out my GitHub, Codepen, and Dribble to see some of my work.

    </p>
    <a target="_blank" href=""><FontAwesomeIcon icon={faGithubAlt} /></a>
    <a target="_blank" href=""><FontAwesomeIcon icon={faCodepen} /></a>
    <a target="_blank" href=""><FontAwesomeIcon icon={faDribbble} /></a>
    <a target="_blank" href=""><FontAwesomeIcon icon={faLinkedin} /></a>
    <a target="_blank" href=""><FontAwesomeIcon icon={faEnvelope} /></a>
  </React.Fragment>

);

export default AboutPage;
