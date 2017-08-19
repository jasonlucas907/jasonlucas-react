import React, { Component } from 'react';
import App from './App.js'
import MyNameIs from './MyNameIs.js';
import WhoIAm from './WhoIAm.js';
import Work from './Work.js';

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
        <Work />

      </section>
      </div>
    );
  }

}

export default LandingPage;
