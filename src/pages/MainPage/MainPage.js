import React, { Component } from 'react';

import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import BioComponent from '../../components/BioComponent/BioComponent';
import ContactComponent from '../../components/ContactComponent/ContactComponent';

import './index.css';

class MainPage extends Component {
  state = {};

  render() {
    return (
      <div className="mainpage__wrapper">
        <div className="scroll-child">
          <HeaderComponent />
        </div>
        <div className="scroll-child">
          <BioComponent />
        </div>
        <div className="scroll-child">
          <ContactComponent />
        </div>
      </div>
    );
  }
}

export default MainPage;
