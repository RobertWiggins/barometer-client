import React from 'react';

export default class SearchError extends React.Component {
  render() {
    return (
      <div id="searchError">
        <p>
          Unfortunately, Twitter has removed free access to its tweet search endpoint.
        </p>
      </div>
    );
  }
}
