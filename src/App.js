import React from 'react';
// import { Route, Link } from 'react-router-dom';
import config from './config';
import './App.css';
import Header from './Components/Header/Header.js'
import FormQuery from './Components/FormQuery/FormQuery';
import EmotionChart from './Components/EmotionChart/EmotionChart'
import TweetList from './Components/TweetList/TweetList';

class App extends React.Component {

  state = {
    watsonEmotionResults: null, 
    tweets: null,
  };

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
        if (!response.ok) {
          throw new Error( { message: 'something seems to have gone wrong'} );
        }
        return response.json();
      })
      .then(data => {
        // console.log('FROM THE FRONT END!!!!!', data);
        console.log('data.watsonEmotionResults: ', data.watsonEmotionResults);
        this.setState( {
          watsonEmotionResults: data.watsonEmotionResults,
          tweets: data.tweetContentArr,
        } )
      })
      .catch(error => console.log(error) ); // fix error message handling
  }

  render() {
    console.log('STATE CHANGED', this.state)

    let isEmotionDataPresent = (this.state.watsonEmotionResults ? true : false);
    let isTweetDataPresent = (this.state.tweets ? true : false);
    console.log('isEmotionDataPresent: ', isEmotionDataPresent);

    let emotionChartDisplay;
    if (isEmotionDataPresent) {
      emotionChartDisplay = <EmotionChart watsonEmotionResults={this.state.watsonEmotionResults}></EmotionChart>;
    } else {
      emotionChartDisplay = 'Emotion data not present, not displayed';
    }

    return (
      <div>
        <Header></Header>
        <FormQuery handleSearch={this.handleSearch} handleSubmitQuery={this.handleSubmitQuery} ></FormQuery>
        {emotionChartDisplay}
        <TweetList tweets={this.state.tweets}></TweetList>
      </div>

    );
  }
}

export default App;
