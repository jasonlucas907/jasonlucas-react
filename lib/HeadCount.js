import React, { Component } from 'react';
import App from './App.js'

export default class HeadCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadCountImage: 'work-image-container',
      HeadCountVideo: 'work-video-container hide',
      HeadCountLinks: 'work-box-links-container hide',
      HeadCountbox: 'work-box-container'
    };
  }

  selectWork()  {
    this.setState({
      HeadCountImage: 'work-image-container hide',
      HeadCountVideo: 'work-video-container',
      HeadCountLinks: 'work-box-links-container',
      HeadCountbox: 'work-box-container scale'
    });
  }

  unSelectWork()  {
    this.setState({
      HeadCountImage: 'work-image-container',
      HeadCountVideo: 'work-video-container hide',
      HeadCountLinks: 'work-box-links-container hide',
      HeadCountbox: 'work-box-container'
    })
  }

  siteLink() {
    window.open('https://jasonlucas907.github.io/HeadCount2.0/');
  }

  gitHubLink() {
    window.open('https://github.com/jasonlucas907/HeadCount2.0');
  }

  compLink() {
    window.open('https://github.com/turingschool-examples/headcount2.0');
  }

  render() {



    return (
      <div>

        <section className={ this.state.HeadCountbox } onMouseEnter={this.selectWork.bind(this)}
                onMouseLeave={this.unSelectWork.bind(this)}>
          <section className={ this.state.HeadCountVideo }>
            <video poster='assets/head-count.mp4' className='work-video'  playsInline autoPlay muted loop>
              <source src='assets/head-count.mp4' type='video/webm'></source>
              <source src='assets/head-count.mp4' type='video/mp4'></source>
            </video>
          </section>

          <section className={ this.state.HeadCountLinks }>
            <div className='work-box-links-background'></div>
            <p className='work-box-site work-link' onClick={() => this.siteLink(this)}>SITE</p>
            <p className='work-box-github work-link' onClick={() => this.gitHubLink(this)}>GITHUB</p>
            <p className='work-box-comp work-link' onClick={() => this.compLink(this)}>ORIGINAL COMP</p>
          </section>

          <section className={ this.state.HeadCountImage }>
            <img className='work-box-image' src='assets/head-count-image.jpg'/>
            <div className='work-box-title-background'></div>
            <p className='work-box-title'>HEAD COUNT 2.0</p>
            <p className='work-box-description'>REACT</p>
          </section>
        </section>

      </div>
    );
  }

}
