import React, { Component } from 'react';
import LandingPage from './LandingPage.js';
import Navigation from './Navigation.js';
import WhoIAm from './whoIAm.js';
import WhoIAmPage from './WhoIAmPage.js';
import Work from './Work.js';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayStatus: 'landingPage',
      whoIamDisplay: false,
    };
  }

  changePageDisplay(page) {
    console.log('app')
    this.setState({
      displayStatus: page,
    });
    console.log(this.state.displayStatus)
  }

  landingPageDisplay() {
    if (this.state.displayStatus === 'landingPage') {
      return (
        <div>
          < LandingPage />
          < WhoIAm />
        </div>
      );
    }
    if (this.state.displayStatus === 'work') {
      return (
        <div>
          < Work />
        </div>
      );
    }
    if (this.state.displayStatus === 'WhoIAmPage') {
      return (
        <div>
          < WhoIAmPage />
        </div>
      );
    }

  }



  render() {


    return (
      <div className='App'>

        < Navigation changePageDisplay={this.changePageDisplay.bind(this)} />
        {this.landingPageDisplay()}

      </div>
    );
  }

}
