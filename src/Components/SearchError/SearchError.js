import React from 'react';
import { directive } from '@babel/types';

export default class SearchError extends React.Component {
  render() {
    return (
      <div id="searchError">
        <p>
          oops! Something went wrong. It's not you, it's me. Maybe. Assess your
          search and try again.
        </p>
      </div>
    );
  }
}
