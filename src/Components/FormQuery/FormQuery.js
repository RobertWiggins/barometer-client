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
          <input required maxLength="25"
            id="searchTweets"
            type="text"
            name="searchTweets"
            aria-label="Keywords to search for tweets"
            aria-required="true"
            placeholder="New York Yankees"
          />
          <button><img src="./static/search_icon.png" alt="search"></img></button>
        </form>
      </div>
    );
  }
}

export default FormQuery;
