import React from 'react';

import './index.css';

function ContactComponent(props) {
  return (
    <div className="contact__wrapper">
      <span>contact me at:</span>
      <span>josh.hedstrom@protonmail.com</span>
      <span>
        <a href="https://github.com/joshhedstrom">github</a>
      </span>
      <span>
        <a href="https://www.linkedin.com/in/josh-hedstrom/">linkedin</a>
      </span>
    </div>
  );
}

export default ContactComponent;
