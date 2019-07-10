import React from 'react';

export default class SearchHistory extends React.Component {
  render() {
    let history = [];
    let count = 0;
    const DISPLAYSEARCHQUANTITY = 6;

    while (
      this.props.queries !== null &&
      count < DISPLAYSEARCHQUANTITY &&
      count !== this.props.queries.length
    ) {
      // iterate from back of history array
      let query = this.props.queries[(this.props.queries.length - count - 1)].query;
      history.push(
          <button
            key={count}
            className="pastSearch"
            onClick={e => {
              e.preventDefault();
              console.log(e.target.innerHTML);
              this.props.handleSubmitQuery(e.target.innerHTML);
            }}
          >
            {query}
          </button>
      );
      count++;
    }

    /* pass in queries from app state*/
    return (
      <section id="searchHistory">
        <h3>Users searching</h3>
        <ul id="buttonsHistory">{history}</ul>
      </section>
    );
  }
}
