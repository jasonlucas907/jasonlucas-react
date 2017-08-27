import React, { Component } from 'react';
import App from './App.js'

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuStatus: 'closed',
      navigationContainer: 'navigation-container',
      navLinksContainer: 'nav-links',
      menuOverlay: 'menu-overlay',
      menuCloseTitle: 'menu-close-title hide',
      navLinkTitle: 'nav-link-main-title',
      navLinkDescription: 'nav-link-title-description hide',
    };
  }

  navigation() {
    if (this.state.menuStatus === 'closed') {
      this.openNavigationContainer();
      this.openNavLinksContainer();
      this.openMenuOverlay();
      this.menuCloseTitleOn();
      this.navLinkAnimationOn();
      setTimeout(() => { this.navLinkDescriptionAnimationOn(); }, 2000);
      this.setState({
        menuStatus: 'open',
      });
    } else if (this.state.menuStatus === 'open') {
      this.closeNavigationContainer();
      this.closeNavLinksContainer();
      this.closeMenuOverlay();
      this.menuCloseTitleOff();
      this.navLinkAnimationOff();
      this.navLinkDescriptionAnimationOff();
      this.setState({
        menuStatus: 'closed',
      });
    }
  }

  openNavigationContainer() {
    this.setState({
      navigationContainer: 'navigation-container navigation-container-open',
    });
  }

  closeNavigationContainer() {
    this.setState({
      navigationContainer: 'navigation-container navigation-container-close',
    });
  }

  openNavLinksContainer() {
    this.setState({
      navLinksContainer: 'nav-links nav-links-open',
    });
  }

  closeNavLinksContainer() {
    this.setState({
      navLinksContainer: 'nav-links nav-links-close',
    });
  }

  openMenuOverlay() {
    this.setState({
      menuOverlay: 'menu-overlay menu-overlay-on',
    });
  }

  closeMenuOverlay() {
    this.setState({
      menuOverlay: 'menu-overlay menu-overlay-off',
    });
  }

  menuCloseTitleOn() {
    this.setState({
      menuCloseTitle: 'menu-close-title',
    });
  }

  menuCloseTitleOff() {
    this.setState({
      menuCloseTitle: 'menu-close-title hide',
    });
  }

  navLinkAnimationOn() {
    this.setState({
      navLinkTitle: 'nav-link-main-title nav-link-main-title-animation',
    });
  }

  navLinkAnimationOff() {
    this.setState({
      navLinkTitle: 'nav-link-main-title',
    });
  }

  navLinkDescriptionAnimationOn() {
    this.setState({
      navLinkDescription: 'nav-link-title-description nav-link-title-description-animation',
    });
  }

  navLinkDescriptionAnimationOff() {
    this.setState({
      navLinkDescription: 'nav-link-title-description hide',
    });
  }

  closeAllNavigation() {
    this.closeNavigationContainer();
    this.closeNavLinksContainer();
    this.closeMenuOverlay();
    this.menuCloseTitleOff();
    this.navLinkAnimationOff();
    this.navLinkDescriptionAnimationOff();
    this.setState({
      menuStatus: 'closed',
    });
  }

  landingPage() {
    this.closeAllNavigation();
    this.props.changePageDisplay('landingPage');
  }

  whoIam() {
    this.closeAllNavigation();
    this.props.changePageDisplay('WhoIAmPage');
  }

  work() {
    this.closeAllNavigation();
    this.props.changePageDisplay('work');
  }

  gitHubLink() {
    this.closeAllNavigation();
    window.open('https://github.com/jasonlucas907');
  }

  contact() {
    this.closeAllNavigation();
    this.props.changePageDisplay('Contact');
  }

  render() {


    return (
      <div>
        <img className='menu-icon' src='assets/menu-icon-gear.png' onClick={() => this.navigation(this)}/>
            <p className={this.state.menuCloseTitle}>CLOSE</p>

              <section className={this.state.navigationContainer}>

                    <div className={this.state.navLinksContainer}>

                      <div className='nav-link-title-container' onClick={() => this.landingPage(this)}>
                        <div className='nav-title-box'>
                          <p className={this.state.navLinkTitle}>JASON LUCAS</p>
                          <p className={this.state.navLinkDescription}>DEVELOPER</p>
                        </div>
                      </div>

                      <div className='nav-link-container'>
                      
                        <div className='nav-link-box' onClick={() => this.whoIam(this)}>
                          <p className='nav-link-description'>JASON LUCAS</p>
                          <p className='nav-link-title'>WHO I AM</p>
                        </div>

                        <div className='nav-link-box work-box' onClick={() => this.work(this)}>
                          <p className='nav-link-description'>RECENT PROJECTS</p>
                          <p className='nav-link-title'>WORK</p>
                        </div>

                        <div className='nav-link-box' onClick={() => this.gitHubLink(this)}>
                          <p className='nav-link-description'>MY PROFILE</p>
                          <p className='nav-link-title'>GITHUB</p>
                        </div>

                        <div className='nav-link-box' onClick={() => this.contact(this)}>
                          <p className='nav-link-description'>SAY HELLO</p>
                          <p className='nav-link-title'>CONTACT</p>
                        </div>

                      </div>
                    </div>
                  </section>

            <div className={this.state.menuOverlay}></div>
      </div>
    );
  }

}
