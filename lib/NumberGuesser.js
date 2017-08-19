import React, { Component } from 'react';
import App from './App.js'

export default class NumberGuesser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NumberGuesserImage: 'work-image-container',
      NumberGuesserVideo: 'work-video-container hide',
      NumberGuesserLinks: 'work-box-links-container hide',
      NumberGuesserbox: 'work-box-container'
    };
  }

  selectWork()  {
    this.setState({
      NumberGuesserImage: 'work-image-container hide',
      NumberGuesserVideo: 'work-video-container',
      NumberGuesserLinks: 'work-box-links-container',
      NumberGuesserbox: 'work-box-container scale'
    });
  }

  unSelectWork()  {
    this.setState({
      NumberGuesserImage: 'work-image-container',
      NumberGuesserVideo: 'work-video-container hide',
      NumberGuesserLinks: 'work-box-links-container hide',
      NumberGuesserbox: 'work-box-container'
    })
  }

  siteLink() {
    window.open('https://jasonlucas907.github.io/Robbie-Number-Guesser/');
  }

  gitHubLink() {
    window.open('https://github.com/jasonlucas907/Robbie-Number-Guesser');
  }

  compLink() {
    window.open('http://frontend.turing.io/projects/number-guesser.html');
  }

  render() {



    return (
      <div>

        <section className={ this.state.NumberGuesserbox } onMouseEnter={this.selectWork.bind(this)}
                onMouseLeave={this.unSelectWork.bind(this)}>
          <section className={ this.state.NumberGuesserVideo }>
            <video poster='assets/number-guesser.mp4' className='work-video'  playsInline autoPlay muted loop>
              <source src='assets/number-guesser.mp4' type='video/webm'></source>
              <source src='assets/number-guesser.mp4' type='video/mp4'></source>
            </video>
          </section>

          <section className={ this.state.NumberGuesserLinks }>
            <div className='work-box-links-background'></div>
            <p className='work-box-site work-link' onClick={() => this.siteLink(this)}>SITE</p>
            <p className='work-box-github work-link' onClick={() => this.gitHubLink(this)}>GITHUB</p>
            <p className='work-box-comp work-link' onClick={() => this.compLink(this)}>ORIGINAL COMP</p>
          </section>

          <section className={ this.state.NumberGuesserImage }>
            <img className='work-box-image' src='assets/numberguesser-image.jpg'/>
            <div className='work-box-title-background'></div>
            <p className='work-box-title'>NUMBER GUESSER</p>
            <p className='work-box-description'>JQUERY CSS</p>
          </section>
        </section>

      </div>
    );
  }

}
