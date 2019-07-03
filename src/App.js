import React from 'react';
// import { Route, Link } from 'react-router-dom';
import config from './config';
import './App.css';
import Header from './Components/Header/Header.js'
import FormQuery from './Components/FormQuery/FormQuery';
import EmotionChart from './Components/EmotionChart/EmotionChart'
class App extends React.Component {
  handleSearch(searchQuery) {
    /* handle onChange text error and guiding handling */
    // console.log(searchQuery);
  }

  /* TODO come back and wire up functionally with twitter retrieveTweets() */
  handleSubmitQuery = query => {
    console.log(query);
    // twitter.retrieveTweets(query);

    // let options = {
    //   headers: new Headers( { 
    //     'content-type': 'application/json'
    //   }),
    //   params: ({
    //     query,
    //   })
    //   // body: {
    //   //   query,
    //   // },
    // }
    // JSON.stringify(options);
    /* try to communicate with backend */
    fetch(config.API_ENDPOINT + `/tweets/queries/${query}`) // how to send body?
      .then(response => {
        if (!response.ok || response.status.toString()[0] !== 2) {
          throw new Error( { message: 'something seems to have gone wrong'} );
        }
        return response.json();
      })
      .then(data => console.log('FROM THE FRONT END!!!!!', data))
      .catch(error => console.log(error) ); // fix error message handling
  }

  render() {
    return (
      <div>
        <Header></Header>
        <FormQuery handleSearch={this.handleSearch} handleSubmitQuery={this.handleSubmitQuery} ></FormQuery>
        <EmotionChart></EmotionChart>
      </div>

    );
  }
}

export default App;
