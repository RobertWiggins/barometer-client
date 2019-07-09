import React from 'react';
import {Bar} from 'react-chartjs-2';

export default class ExampleChart extends React.Component {
  watsonEmotionResults =  {
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
        labels: Object.keys(
          this.watsonEmotionResults.emotion.targets[0].emotion
        ),
        datasets: [
          {
            label: 'Emotion density',
            data: Object.values(
              this.watsonEmotionResults.emotion.targets[0].emotion
            ),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    }

    const options = {
      title: {
        display: true,
        text: 'target keywords',
        fontSize: 25,
        fontColor: '#000000',
        padding: 20,
      },
      legend: {
        display: false,
      }
    }

    // console.log('data in EmotionChart: ', data);

    return (
      <section id="emotionChart">
        <Bar className="chart" data={data} options={options} />
      </section>
    );
  }
}
