import React from 'react';
import './TweetList.css';

export default class TweetList extends React.Component {

  render() {
    
    const tweets = this.props.tweets;
    let isTweetDataPresent = (this.props.tweets ? true : false);
    let tweetList;
    if (isTweetDataPresent) {
      tweetList = tweets.map((tweet, idx) => {
        return <li key={idx}>{tweet}</li>
      } )
    }
    

    return (
      <section id="tweet-list">
        <h3 id="listTitle">Tweets</h3>
        <ul id="tweets">
          {tweetList}
        </ul>
      </section>
    );
  }
}
