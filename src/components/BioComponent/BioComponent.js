import React from 'react';

import './index.css';

function BioComponent(props) {
  return (
    <div className="bio__wrapper">
      <p className="bio__content">
        I'm Josh Hedstrom, and I'm a full stack web developer and cybersecurity
        zealot. Currently, I'm the tech lead for a team responsible for
        migrating an enterprise messaging system to AWS/Node.js. I'm also a Web
        Application Security resource. I'm skilled in React, Node, and ES6. I've
        worked with both Redux and React Hooks. I have experience with Angular
        6, Bootstrap, Firebase, Express.js, MySQL, and MongoDB. I've also worked
        in Java and Typescript. Previously, I was the lead front end developer
        working on a complex cost management application for a grocery store
        chain, built principally with React.js. I was also a Senior React
        resource brought in to refactor a custom component library according to
        best practices.
        
        {/* Full Stack Web Development enables me to utilize my
        artistic and logical abilities to thoughtfully engineer precision
        applications that are efficient, intuitive, and maintainable. I'm a hard
        worker and a quick learner; I'm creative, energetic, logical and always
        curious. I am passionate about writing clean code that is easy to read
        and maintain. 
        
        When I'm not coding, I enjoy running, music, craft beer,
        and spending time with my family. I currently live in Albuquerque, NM
        with my wife and two kids. */}
      </p>
    </div>
  );
}

export default BioComponent;
