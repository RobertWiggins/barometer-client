import React from 'react';
import { HorizontalBar, Radar, Polar } from 'react-chartjs-2';

export default class ExampleSentimentChart extends React.Component {
  watsonEmotionResults = {
    usage: {
      text_units: 1,
      text_characters: 1605,
      features: 2,
    },
    sentiment: {
      document: {
        score: 0.358734,
        label: 'positive',
      },
    },
    language: 'en',
    emotion: {
      targets: [
        {
          text: 'leonard',
          emotion: {
            sadness: 0.186835,
            joy: 0.515472,
            fear: 0.099068,
            disgust: 0.087831,
            anger: 0.157847,
          },
        },
      ],
      document: {
        emotion: {
          sadness: 0.559664,
          joy: 0.537748,
          fear: 0.112173,
          disgust: 0.148302,
          anger: 0.14876,
        },
      },
    },
  };

  render() {
    // format chart.js react data
    let isDataPresent = this.watsonEmotionResults ? true : false;
    let data = null;
    if (isDataPresent) {
      data = {
        datasets: [
          {
            label: 'sentiment strength',
            data: [this.watsonEmotionResults.sentiment.document.score],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
    }

    const options = {
      title: {
        display: true,
        fontColor: '#000000',
        text: 'positive sentiment: document-wide',
        fontSize: 24,
        padding: 20,
      },
      legend: {
        display: false,
      }
    }

    return (
      <section>
        <HorizontalBar className="chart" id="sentimentChart" options={options} data={data} />
      </section>
    );
  }
}
