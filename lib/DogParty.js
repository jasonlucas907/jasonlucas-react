import React, { Component } from 'react';
import App from './App.js'

export default class DogParty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DogPartyImage: 'work-image-container',
      DogPartyVideo: 'work-video-container hide',
      DogPartyLinks: 'work-box-links-container hide',
      DogPartybox: 'work-box-container'
    };
  }

  selectWork()  {
    this.setState({
      DogPartyImage: 'work-image-container hide',
      DogPartyVideo: 'work-video-container',
      DogPartyLinks: 'work-box-links-container',
      DogPartybox: 'work-box-container scale'
    });
  }

  unSelectWork()  {
    this.setState({
      DogPartyImage: 'work-image-container',
      DogPartyVideo: 'work-video-container hide',
      DogPartyLinks: 'work-box-links-container hide',
      DogPartybox: 'work-box-container'
    })
  }

  siteLink() {
    window.open('https://jasonlucas907.github.io/video-the-dog-party-1705/');
  }

  gitHubLink() {
    window.open('https://github.com/jasonlucas907/video-the-dog-party-1705');
  }

  compLink() {
    window.open('http://frontend.turing.io/lessons/module-1/css-1.html');
  }

  render() {



    return (
      <div>

        <section className={ this.state.DogPartybox } onMouseEnter={this.selectWork.bind(this)}
                onMouseLeave={this.unSelectWork.bind(this)}>
          <section className={ this.state.DogPartyVideo }>
            <video poster='assets/dog-party.mp4' className='work-video'  playsInline autoPlay muted loop>
              <source src='assets/dog-party.mp4' type='video/webm'></source>
              <source src='assets/dog-party.mp4' type='video/mp4'></source>
            </video>
          </section>

          <section className={ this.state.DogPartyLinks }>
            <div className='work-box-links-background'></div>
            <p className='work-box-site work-link' onClick={() => this.siteLink(this)}>SITE</p>
            <p className='work-box-github work-link' onClick={() => this.gitHubLink(this)}>GITHUB</p>
            <p className='work-box-comp work-link' onClick={() => this.compLink(this)}>ORIGINAL COMP</p>
          </section>

          <section className={ this.state.DogPartyImage }>
            <img className='work-box-image' src='assets/dog-party-image.jpg'/>
            <div className='work-box-title-background'></div>
            <p className='work-box-title'>DOG PARTY</p>
            <p className='work-box-description'>CSS HTML JQUERY</p>
          </section>
        </section>

      </div>
    );
  }

}
