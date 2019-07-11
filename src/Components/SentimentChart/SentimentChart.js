import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

export default class SentimentChart extends React.Component {
  render() {
    // format chart.js react data
    let isDataPresent = this.props.watsonEmotionResults ? true : false;
    let data = null;
    let options = null;
    let barColor, borderColor;
    if (isDataPresent) {
      barColor =
        this.props.watsonEmotionResults.sentiment.document.label === 'negative'
          ? 'rgba(255, 99, 132, 0.2)'
          : 'rgba(75, 192, 192, 0.2)';
      borderColor =
      (this.props.watsonEmotionResults.sentiment.document.label ===
      'negative'
        ? 'rgba(255, 99, 132, 1)'
        : 'rgba(75, 192, 192, 1)');
      data = {
        datasets: [
          {
            data: [
              this.props.watsonEmotionResults.sentiment.document.score
            ],
            backgroundColor: [barColor],
            borderColor: [borderColor],
            borderWidth: 1,
          },
        ],
      };
      
      options = {
        title: {
          display: true,
          fontColor: '#000000',
          text: this.props.watsonEmotionResults.sentiment.document.label + ' sentiment: entirety',
          fontSize: 20,
        },
        legend: {
          display: false,
        }
      } 
    }

    return (
      <section className="sentiment_chart" id="sentimentChart">
        <HorizontalBar className="chart" options={options} data={data} />
      </section>
    );
  }
}
