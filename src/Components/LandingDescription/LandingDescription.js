import React from 'react';
import './Landing.css'

export default class LandingDescription extends React.Component {
  render() {
    return (
      <div id="landingPane">
        <section className="landingRow">
          <header>
            <h3>
              Determine which emotions people on Twitter are feeling regarding
              any subject in real-time.
            </h3>
          </header>
          <p>
            <em>
              placeholder for screenshot of natural language emotion summary per
              query.
            </em>
          </p>
          <p>
            The Barometer web application grants users the ability to
            quantitatively measure the general population’s emotional view of
            events and subjects in real-time.
          </p>
            <p> Through combining Twitter's tweet
            search result API and IBM’s natural language processing model, the
            results are aggregated into 6 defined emotional sentiment categories
            (%): sadness, joy, fear, disgust, anger, and overall positive vs.
            negative outlook.
            </p> 
            <p id="thesis">The application is effectively a continuous,
            user-search driven online social presence survey.
            </p> 
        </section>
        <section id="callAction">
          <header>
            <h3>
              Record and quantify the online users' emotional viewpoint on any
              given subject.
            </h3>
          </header>
          <p>
            <em>
              placeholder for screenshot of emotion chart regarding subject
              matter.
            </em>
          </p>
          <p>
            Interactive charts and comparative displays enable easily digestible
            proprietary insights.
          </p>
        </section>
        <button id="hideLanding" onClick={() => this.props.onLandingButtonClick()}>Start searching now.</button>
      </div>
    );
  }
}
