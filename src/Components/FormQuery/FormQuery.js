import React from 'react';

class FormQuery extends React.Component {

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
          <label htmlFor="searchTweets" id='search-label'>Search Twitter keywords</label>
          <input required maxLength="25"
            id="searchTweets"
            type="text"
            name="searchTweets"
            placeholder="New York Yankees"
            onChange={e => this.props.handleSearch(e.target.value)}
          />
          <button><img src="./search_icon.png" alt="search"></img></button>
        </form>
      </div>
    );
  }
}

export default FormQuery;
