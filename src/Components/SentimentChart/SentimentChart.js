import React from 'react';
import { HorizontalBar, Radar, Polar } from 'react-chartjs-2';

export default class SentimentChart extends React.Component {
  render() {
    // format chart.js react data
    let isDataPresent = this.props.watsonEmotionResults ? true : false;
    let data = null;
    let barColor, borderColor, titleColor;
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
      titleColor =
          (this.props.watsonEmotionResults.sentiment.document.label ===
          'negative'
            ? 'rgba(255, 99, 132, 1)'
            : '#008000');
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
    }

    const options = {
      title: {
        display: true,
        fontColor: titleColor,
        text: this.props.watsonEmotionResults.sentiment.document.label + ' sentiment',
        fontSize: 22,
      },
      legend: {
        display: false,
      }
    } 

    return (
      <section>
        <HorizontalBar id="sentimentChart" options={options} data={data} />
      </section>
    );
  }
}
