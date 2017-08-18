import React, { Component } from 'react';
import LandingPage from './LandingPage.js';
import Navigation from './Navigation.js';
import WhoIAmPage from './WhoIAmPage.js';
import Work from './Work.js';




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayStatus: 'landingPage',
    };
  }

  changePageDisplay(page) {
    this.setState({
      displayStatus: page,
    });
  }

  pageDisplay() {
    if (this.state.displayStatus === 'landingPage') {
      return (
        <div>
          < LandingPage />
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
        {this.pageDisplay()}

      </div>
    );
  }

}
