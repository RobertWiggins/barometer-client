import React from 'react';

export default class SearchHistory extends React.Component {

  render() {

    let history;
    if (!this.props.queries) {
      history = '';
    } else {
      history = this.props.queries.map( (query) => {
        return <span onClick={e => {
          e.preventDefault();
          console.log(e.target.innerHTML);
          this.props.handleSubmitQuery(e.target.innerHTML);
        }} key={query.id} text={query.query}>{query.query}</span>;
      })
    }

    /* pass in queries from app state*/
    return (
      <section id="searchHistory">
        <h3>Users searching</h3>
        {history}
      </section>
    )
  }

}