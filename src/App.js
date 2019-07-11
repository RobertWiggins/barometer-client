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
import SearchHistory from './Components/SearchHistory/SearchHistory';
import LandingDescription from './Components/LandingDescription/LandingDescription';
import LoadingBar from './Components/LoadingBar/LoadingBar'

class App extends React.Component {
  state = {
    watsonEmotionResults: null,
    tweets: null,
    queries: null,
    currentQuery: null,
    isSearchDisabled: false, // TODO not used at moment
    hasError: false,
    showLandingPage: true,
    isLoading: false,
  };

  onLandingButtonClick = () => {
    console.log('registered landing click');
    this.setState({
      showLandingPage: false,
    });
  };

  /* retrieve past query history for all users */
  componentDidMount() {
    fetch(config.API_ENDPOINT + '/queries/history')
      .then(response => {
        if (!response.ok) {
          throw new Error({ message: 'error with getting history' });
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          queries: data.queries,
        });
      })
      .catch(err => console.log(err.message));
  }

  /* Query valid and submitted, add query to history */
  /** TODO im doing this wrong, needs prev props */

  // returns false and disables search function if search > 25ch
  handleSearch(searchQuery) {
  
  }

  /* TODO come back and wire up functionally with twitter retrieveTweets() */
  handleSubmitQuery = query => {
    // TODO be careful with loading here, experimental
    this.setState({
      isLoading: true,
    }); 
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
        this.setState(
          {
            watsonEmotionResults: data.watsonEmotionResults,
            tweets: data.duplicatesFiltered,
            hasError: false,
            currentQuery: query,
            isLoading: false, // TODO loading experimental, careful here
          },
          this.addToHistory(query)
        ); // TODO review with mentor. WHY???
        /* TODO add query to history. Optimal? */
      })
      .catch(error =>
        this.setState({
          isLoading: false,
          hasError: true,
        })
      ); // fix error message handling
  };

  addToHistory(newQuery) {
    console.log('PARAM: ', newQuery);
    console.log('CURRENT QUERY: ', this.state.currentQuery);
    const body = JSON.stringify({
      query: newQuery,
    });
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body,
    };
    // check if its already been searched, if not dont add
    let pastQueries = [];
    for (let i = 0; i < this.state.queries.length; i++) {
      pastQueries.push(this.state.queries[i].query);
    }
    console.log(options, pastQueries);
    if (!pastQueries.includes(newQuery)) {
      fetch(config.API_ENDPOINT + '/queries/history', options)
        .then(response => {
          if (!response.ok) {
            throw new Error({ message: 'error with retrieving history' });
          }
          return response.json();
        })
        .then(data => {
          console.log('inserted query to history: ', data);
          this.setState({
            queries: [...this.state.queries, data],
          });
        })
        .catch(err => console.log(err.message));
    }
  }

  render() {
    let isEmotionDataPresent = this.state.watsonEmotionResults ? true : false;
    let isTweetDataPresent = this.state.tweets ? true : false;

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

    let loadingBar = this.state.isLoading ? (<LoadingBar></LoadingBar>) : ('');

    return (
      <main className="main">
        <Header />
        {this.state.showLandingPage ? (
          <LandingDescription
            onLandingButtonClick={this.onLandingButtonClick}
          />
        ) : (
          ''
        )}
        {!this.state.showLandingPage ? (
          <div id="hideHomePage">
            <FormQuery
              isSearchDisabled={this.state.isSearchDisabled}
              handleSearch={this.handleSearch}
              handleSubmitQuery={this.handleSubmitQuery}
            />
            {errorDisplay}
            <SearchHistory
              handleSubmitQuery={this.handleSubmitQuery}
              queries={this.state.queries}
            />
            {loadingBar}
            <div id="grid-holder">
              {emotionChartDisplay}
              {sentimentChartDisplay}
              <TweetList tweets={this.state.tweets} />
            </div>
          </div>
        ) : (
          ''
        )}
      </main>
    );
  }
}

export default App;
