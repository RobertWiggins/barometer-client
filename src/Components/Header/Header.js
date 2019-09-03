import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <header id="app-header" role="banner">
        <h1>
          <span className="app-title blue">B</span>
          <span className="app-title blue-purple">a</span>
          <span className="app-title purple">r</span>
          <span className="app-title purple-pink">o</span>
          <span className="app-title pink">m</span>
          <span className="app-title red">e</span>
          <span className="app-title red-orange">t</span>
          <span className="app-title orange">e</span>
          <span className="app-title orange-yellow">r</span>
        </h1>
        <h2 className="tagline">See the chatter.</h2>
      </header>
    )
  }
}
