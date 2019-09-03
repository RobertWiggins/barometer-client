import React from 'react';

export default class Header extends React.Component {
  
  render() {
    return (
      <header id="app-header" role="banner">
        <h1 className="app-title">
          Barometer
        </h1>
        <h2 className="tagline">See the chatter.</h2>
      </header>
    );
  }
}
