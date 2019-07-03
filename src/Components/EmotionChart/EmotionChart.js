import React from 'react';
import './EmotionChart.css'

export default class EmotionChart extends React.Component {

  state = {
    usage: {
      text_units: 1,
      text_characters: 1650,
      features: 2,
    },
    sentiment: {
      document: {
        score: 0.755227,
        label: 'positive',
      },
    },
    language: 'en',
    emotion: {
      targets: [
        {
          text: 'joyful',
          emotion: {
            sadness: 0.054594,
            joy: 0.737256,
            fear: 0.502948,
            disgust: 0.012561,
            anger: 0.013243,
          },
        },
      ],
      document: {
        emotion: {
          sadness: 0.08013,
          joy: 0.703554,
          fear: 0.593047,
          disgust: 0.664955,
          anger: 0.5921,
        },
      },
    },
  };

  render() {
    return (
      <section>
        <h2> Chart </h2>
      </section>
    );
  }

}