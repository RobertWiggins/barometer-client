import React from 'react';

class FormQuery extends React.Component {

  state = {

  };

  render() {
    return (
      <form
        className="search"
        id="searchOne"
        onSubmit={e => {
          e.preventDefault();
          this.props.handleSubmitQuery(e.target.firstSearch.value);
        }}
      >
        <label htmlFor="firstSearch">Search</label>
        <input
          id="firstSearch"
          type="text"
          name="firstSearch"
          onChange={e => this.props.handleSearch(e.target.value)}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default FormQuery;
