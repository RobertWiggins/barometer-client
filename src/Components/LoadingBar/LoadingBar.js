import React from 'react';

export default class LoadingBar extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="top"></div>
        <div className="loading">
          <i className="fa fa-spinner"></i>
        </div>
      </div>
    );
  }
}
