import React from 'react';

export default class SearchHistory extends React.Component {

  render() {

    let history;
    if (!this.props.queries) {
      history = '';
    } else {
      history = this.props.queries.map( (query, idx) => {
        return <span>{query.query}</span>;
      })
    }

    /* pass in queries from app state*/
    return (
      <section id="searchHistory">
        {history}
      </section>
    )
  }

}