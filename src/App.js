import React from 'react';
import './App.css';
import twitter from './apis/twitter'

class App extends React.Component {

  handleSearch(searchQuery) {
    console.log(searchQuery) 
  }

  handleSubmitQuery(query) {
    console.log(query);
    twitter.retrieveTweets(query);
  }

  render() {
  return (
    <div>
      <form className="search" id="searchOne" onSubmit={(e) => { 
        e.preventDefault();
        this.handleSubmitQuery(e.target.firstSearch.value);
       }}>
        <label>Search</label>
        <input id="firstSearch" type="text" name="firstSearch" onChange={(e) => this.handleSearch(e.target.value)}></input>
        <button>Submit</button>
      </form>
    </div>
  );
  }
}

export default App;
