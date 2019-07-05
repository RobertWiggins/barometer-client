import React from 'react';

class FormQuery extends React.Component {
  state = {};

  render() {
    return (
      <div id="searchArea">
        <form
          className="search"
          id="searchOne"
          onSubmit={e => {
            e.preventDefault();
            this.props.handleSubmitQuery(e.target.searchTweets.value);
          }}
        >
          <label htmlFor="searchTweets" id='search-label'>Search Twitter</label>
          <input
            id="searchTweets"
            type="text"
            name="searchTweets"
            placeholder="New York Yankees"
            onChange={e => this.props.handleSearch(e.target.value)}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default FormQuery;
