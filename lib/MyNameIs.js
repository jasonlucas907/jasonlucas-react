import React, { Component } from 'react';
import App from './App.js'

export default class MyNameIs extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {



    return (
      <div>

      <section className='main-landing-page page'>

        <section className='my-name-is-container'>
          <p className='scroll'>SCROLL</p>
          <div className='scroll-line'></div>
          <img className='my-name-image' src='assets/26qanda-superJumbo.jpg'/>
          <div className='my-name-bottom-border'></div>
          <div className='my-name-background'></div>
          <div className='hi-container-background'></div>
          <div className='hi-container'>
            <p className='hi'> Hi,</p>
            <p className='my-name'> My name is</p>
          </div>
            <div className='name-outer-container'>
              <div className='name-container'>
                <p className='jason-lucas'>JASON LUCAS</p>
                <p className='developer'>DEVELOPER</p>
              </div>
            </div>
        </section>


      </section>

      </div>
    );
  }

}
