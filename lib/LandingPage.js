import React, { Component } from 'react';
import App from './App.js'
import WhoIAm from './WhoIAm.js';
import MyNameIs from './MyNameIs.js';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {


  // document.addEventListener("scroll", this.currentWindowPosition);



    return (
      <div>
      <section className='main-landing-page page'>

        <MyNameIs />
        <WhoIAm />

      </section>
      </div>
    );
  }

}

export default LandingPage;
