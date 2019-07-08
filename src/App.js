import React from 'react';
// import { Route, Link } from 'react-router-dom';
import config from './config';
import './App.css';
import Header from './Components/Header/Header.js'
import FormQuery from './Components/FormQuery/FormQuery';
import EmotionChart from './Components/EmotionChart/EmotionChart'
import TweetList from './Components/TweetList/TweetList';
import ExampleChart from './Components/ExampleChart/ExampleChart'
import SentimentChart from './Components/SentimentChart/SentimentChart';
import ExampleSentimentChart from './Components/ExampleSentimentChart/ExampleSentimentChart'

class App extends React.Component {

  state = {
    watsonEmotionResults: null, 
    tweets: null,
    isSearchDisabled: false,
  };

  // componentDidMount() {
  //   this.setState({
  //     watsonEmotionResults: null, 
  //     tweets: null,
  //     isSearchDisabled: false,
  //   })
  // }

  // returns false and disables search function if search > 25ch
  handleSearch(searchQuery) {
    // maximum search query length, allows limiting of watson targets
  //   const queryMaxLength = 25;
  //   if (searchQuery.length > queryMaxLength && !this.state.isSearchDisabled) {
  //     this.setState({
  //       isSearchDisabled: true,
  //   });
  //  } else if (searchQuery.length <= queryMaxLength && this.state.isSearchDisabled) {
  //     this.setState({
  //       isSearchDisabled: false,
  //     });
  //   }
  }

  /* TODO come back and wire up functionally with twitter retrieveTweets() */
  handleSubmitQuery = query => {
    console.log(query);
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
          tweets: data.duplicatesFiltered,
        } )
      })
      .catch(error => console.log(error) ); // fix error message handling
  }

  render() {
    console.log('STATE CHANGED', this.state)

    let isEmotionDataPresent = (this.state.watsonEmotionResults ? true : false);
    let isTweetDataPresent = (this.state.tweets ? true : false);
    console.log('isEmotionDataPresent: ', isEmotionDataPresent);

    let emotionChartDisplay, sentimentChartDisplay;
    if (isEmotionDataPresent) {
      emotionChartDisplay = <EmotionChart watsonEmotionResults={this.state.watsonEmotionResults}></EmotionChart>;
      sentimentChartDisplay = <SentimentChart watsonEmotionResults={this.state.watsonEmotionResults}></SentimentChart>
    } else {
      emotionChartDisplay = <ExampleChart></ExampleChart>;
      sentimentChartDisplay = <ExampleSentimentChart></ExampleSentimentChart>
    }

    return (
      <main className="main">
        <Header></Header>
        <FormQuery isSearchDisabled={this.state.isSearchDisabled} handleSearch={this.handleSearch} handleSubmitQuery={this.handleSubmitQuery} ></FormQuery>
        <div id="charts-area">
          {emotionChartDisplay}
          {sentimentChartDisplay}
        </div>
        <TweetList tweets={this.state.tweets}></TweetList>
      </main>
    );
  }
}

export default App;
