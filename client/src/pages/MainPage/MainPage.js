import React, { Component } from 'react';

import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';

import './index.css';
import BioComponent from '../../components/BioComponent/BioComponent';

class MainPage extends Component {
  state = {};

  render() {
    return (
      <div className="mainpage__wrapper">
        <HeaderComponent className="scroll-child" />
        <BioComponent className="scroll-child" />
      </div>
    );
  }
}

export default MainPage;
