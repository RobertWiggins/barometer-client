// import React from 'react';
// import app from './App';
import config from '../../config'

class twitter {

  retrieveTweets(query) {
    const options = {
      method: 'GET',
      'content-type': 'application/json',
      body: {
        'query': query
      },
    };

    const jsonOptions = JSON.stringify(options);

    fetch(config.API_ENDPOINT + `/tweets/queries'/${query}`)
      .then(response => {
        if (!response.ok) {
          return {
            status: response.status,
            message: 'something seems to have gone wrong',
          };
        }
        return response.json();
      })
      .catch(error => error); // perhaps customize more
  }
}

export default twitter;