import React, { Component } from 'react';
import LandingPage from './LandingPage.js';
import Navigation from './Navigation.js';
import WhoIAmPage from './WhoIAmPage.js';
import WorkPage from './WorkPage.js';
import Contact from './Contact.js';




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
          < WorkPage />
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
    if (this.state.displayStatus === 'Contact') {
      return (
        <div>
          < Contact />
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
