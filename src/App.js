import React from 'react';
// import { Route, Link } from 'react-router-dom';
import config from './config';
import './App.css';
import Header from './Components/Header/Header.js';
import FormQuery from './Components/FormQuery/FormQuery';
import EmotionChart from './Components/EmotionChart/EmotionChart';
import TweetList from './Components/TweetList/TweetList';
import ExampleChart from './Components/ExampleChart/ExampleChart';
import SentimentChart from './Components/SentimentChart/SentimentChart';
import ExampleSentimentChart from './Components/ExampleSentimentChart/ExampleSentimentChart';
import SearchError from './Components/SearchError/SearchError';
import SearchHistory from './Components/SearchHistory/SearchHistory'

class App extends React.Component {

  state = {
    watsonEmotionResults: null,
    tweets: null,
    queries: null,
    currentQuery: null,
    isSearchDisabled: false, // TODO not used at moment
    hasError: false,
  };

  /* retrieve past query history for all users */
  componentDidMount() {
    fetch(config.API_ENDPOINT + '/queries/history')
    .then(response => {
      if (!response.ok) {
        throw new Error({ message: 'error with getting history'});
      }
      return response.json()
    }).then(data => {
        console.log('QUERY HISTORY ON MOUNT: ', data.queries)
        this.setState( {
          queries: data.queries
        });
    })
    .catch(err => console.log(err.message))
  }
  
  /* Query valid and submitted, add query to history */
  /** TODO im doing this wrong, needs prev props */
  componentDidUpdate() {
    const body = JSON.stringify( {
      query: this.state.currentQuery
    });
    const options = { 
      method: 'POST', 
      headers: { 'content-type': 'application/json' },
      body,
    };

    /** TODO im doing this wrong */
    fetch(config.API_ENDPOINT + '/queries/history', options)
      .then(response => {
        if (!response.ok) {
          throw new Error({ message: 'error with retrieving history'});
        }
        return response.json()
      })
      .then(data => console.log('inserted query to history: ', data))
      .catch(err => console.log(err.message))
  }

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
          throw new Error({ message: 'something seems to have gone wrong' });
        }
        return response.json();
      })
      .then(data => {
        // console.log('FROM THE FRONT END!!!!!', data);
        console.log('data.watsonEmotionResults: ', data.watsonEmotionResults);
        this.setState({
          watsonEmotionResults: data.watsonEmotionResults,
          tweets: data.duplicatesFiltered,
          hasError: false,
          currentQuery: data.currentQuery
        });
        
      })
      .catch(error =>
        this.setState({
          hasError: true,
        })
      ); // fix error message handling
  };

  render() {
    let isEmotionDataPresent = this.state.watsonEmotionResults ? true : false;
    let isTweetDataPresent = this.state.tweets ? true : false;
    console.log('isEmotionDataPresent: ', isEmotionDataPresent);

    let emotionChartDisplay, sentimentChartDisplay;
    if (isEmotionDataPresent) {
      emotionChartDisplay = (
        <EmotionChart watsonEmotionResults={this.state.watsonEmotionResults} />
      );
      sentimentChartDisplay = (
        <SentimentChart
          watsonEmotionResults={this.state.watsonEmotionResults}
        />
      );
    } else {
      emotionChartDisplay = <ExampleChart />;
      sentimentChartDisplay = <ExampleSentimentChart />;
    }

    let errorDisplay;
    if (this.state.hasError) {
      errorDisplay = <SearchError />;
    } else {
      errorDisplay = '';
    }

    return (
      <main className="main">
        <Header />
        <FormQuery
          isSearchDisabled={this.state.isSearchDisabled}
          handleSearch={this.handleSearch}
          handleSubmitQuery={this.handleSubmitQuery}
        />
        {errorDisplay}
        <SearchHistory queries={this.state.queries}></SearchHistory>
        <div id="grid-holder">
            {emotionChartDisplay}
            {sentimentChartDisplay}
            <TweetList tweets={this.state.tweets} />
        </div>
      </main>
    );
  }
}

export default App;
