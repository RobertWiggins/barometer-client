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
          <input required maxLength="25" disabled={this.props.isSearchDisabled}
            id="searchTweets"
            type="text"
            name="searchTweets"
            placeholder="New York Yankees"
            onChange={e => this.props.handleSearch(e.target.value)}
          />
          <button disabled={this.props.isSearchDisabled}>Search</button>
          <p className={!this.props.isSearchDisabled ? "hidden" : ""} id="searchWarning">*query must be less than 25 characters</p>
        </form>
      </div>
    );
  }
}

export default FormQuery;
