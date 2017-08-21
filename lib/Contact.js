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
          <div className='contact-form-container-background'></div>
          <section className='contact-form-right'>
            <div className='contact-form-background'></div>
            <p className='form-title'>NAME</p>
            <input className='form-input' type='text' placeholder=' ENTER NAME'></input>
            <p className='form-title'>EMAIL</p>
            <input className='form-input' type='text' placeholder=' EMAIL'></input>
            <p className='form-title'>PHONE</p>
            <input className='form-input' type='text' placeholder=' PHONE'></input>
          </section>
          <section className='contact-form-left'>
            <div className='contact-form-background'></div>
            <p className='form-title'>MESSAGE</p>
            <textarea className='message-input' type='text' rows='4' cols='50' placeholder=' MESSAGE'></textarea>
            <section className='submit-container'>
              <section className='submit-button-container'>
                <div className='submit-button'>
                 <p className='submit'>SUBMIT</p>
                </div>
              </section>
              <section className='contact-links-container'>
                <p className='email-title'>EMAIL<span className='email-address'>jlucas5280@gmail.com</span></p>
                <p className='phone-title'>PHONE<span className='phone-number'>907-957-5471</span></p>
              </section>
            </section>
          </section>
        </section>
        <div className='contact-section-bottom-border'></div>
      </section>

      </div>
    );
  }

}
