import React from 'react';

export default class SearchError extends React.Component {
  render() {
    return (
      <div id="searchError">
        <p>
          oops! Something went wrong. It's not you, it's me. Maybe. Natural language analysis is best effort. Please try another search.
        </p>
      </div>
    );
  }
}
