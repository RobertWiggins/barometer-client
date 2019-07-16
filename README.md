# Barometer

The Barometer web application grants users the ability to quantitatively measure the general population’s 
emotional view of events and subjects on Twitter in real-time. Through combining Twitter's tweet search API 
endpoint and IBM’s natural language processing emotion endpoint, the results are aggregated into 6 defined
emotional sentiment categories (%): sadness, joy, fear, disgust, anger, and overall positive vs. negative
outlook. 

Graphical bar graphs and a tweet content pane offers insight into the emotional spectrum and sentiment
revolving any search query. Communicating with a PostgreSQL database enables the application to access and display
what other users have historically searched.

Use cases may include gathering research that will inform corporate messaging strategy, helping an individual
consumer decide whether to attend a certain event, or indexing a user's feelings against the rest of other Twitter
users. The application is effectively a user-driven online social perception survey.

### Live Demo: https://robs-barometer.now.sh/

![Search query with tweet results and emotion charts](https://github.com/RobertWiggins/barometer-client/blob/master/public/static/search_home.png)

![Both emotion and sentiment charts](https://github.com/RobertWiggins/barometer-client/blob/master/public/static/sentiment_charts.png)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and
testing purposes. See deployment for notes on how to deploy the project on a live system. This client runs locally
in conjunction with the barometer-server, which can be found at (https://github.com/RobertWiggins/barometer-server).
Please pay specific attention to the required environment variables and API access credentials detailed within the
barometer-server README.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install` 

Installs necessary dependencies.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command
will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they 
will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you 
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you 
couldn’t customize it when you are ready for it.


## Prerequisites

"chart.js": "^2.8.0",
"cuid": "^2.1.6",
"date-fns": "^1.30.1",
"react": "^16.8.6",
"react-chartjs-2": "^2.7.6",
"react-dom": "^16.8.6",
"react-router-dom": "^5.0.1",
"react-scripts": "^3.0.1"

## Built With
React - The web framework used, 
Node package manager - Dependency Management, 
Node.js - backend web server (https://github.com/RobertWiggins/barometer-server), 
Express - backend web server (https://github.com/RobertWiggins/barometer-server), 
Jest - (testing)

### Author
Robert Wiggins - Original work - Barometer
See also the list of external API dependencies which made this project possible.

### License
This project is licensed under the MIT License - see the LICENSE.md file for details

### Acknowledgments
Special thanks to the folks at IBM Watson for the hard work on the Natural Language Processing model and API.
To Twitter, for providing access to its world of tweets posted within the last seven days through its search API.
