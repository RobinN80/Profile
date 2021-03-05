import React, { Component } from "react";
import Projects from './ProjectsComponent';
import SocialProfiles from "./SocialProfileComponent";
import profilePic from './assets/ProfilePic.jpg';

class App extends Component {
  state = {displayBio: false};
  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
         <h1><strong>&lt;h1&gt;Hello World!&lt;/h1&gt;</strong></h1>
        <img src={profilePic} alt="Profile picture" className="profile"/>
        <p>My name is Robin. I am Fullstack JavaScript Software Developer based in Reno, Nevada.</p>
        <p>My role in the world is to enhance connectivity, both on the computer and off...</p>
        {this.state.displayBio ? (
          <div>
            <p>...and I find great satisfaction in resolving bugs!</p>
            <p>
              Besides coding, I (still) am an avid soccer player, I enjoy going to local cafes to engage with others to discuss how to change the world, and I can not seem get enough walks by the river. 
            </p>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>onClick</button>
          </div>
        )}
        <hr/>
        <Projects />
        <hr/>
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
