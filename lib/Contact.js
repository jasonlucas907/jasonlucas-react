import React, { Component } from 'react';
import App from './App.js'

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {



    return (
      <div>

      <section className='contact-section-container'>
        <div className='contact-background'></div>
        <img className='contact-background-image' src='assets/contact-background.jpg'/>
        <div className='contact-section-top-border'></div>
        <p className='contact-section-title'>CONTACT</p>
        <section className='contact-form-container'>

        </section>
        <div className='contact-section-bottom-border'></div>
      </section>

      </div>
    );
  }

}
