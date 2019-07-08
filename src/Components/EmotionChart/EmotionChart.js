import React from 'react';
import './EmotionChart.css';
import {Bar, Radar, Polar} from 'react-chartjs-2';

export default class EmotionChart extends React.Component {

  

  calculateAvgEmotion(targetsEmotions) {
    let averageEmotions = {
      "sadness": 0,
      "joy": 0,
      "fear": 0,
      "disgust": 0,
      "anger": 0,
    }
    
    targetsEmotions.forEach( emotions => {
        averageEmotions.sadness += emotions.emotion.sadness;
        averageEmotions.joy += emotions.emotion.joy;
        averageEmotions.fear += emotions.emotion.fear;
        averageEmotions.disgust += emotions.emotion.disgust;
        averageEmotions.anger += emotions.emotion.anger;
      }
    );
    /* TODO divide by zero case??? catch error? */
    for (let emotion in averageEmotions) {
      averageEmotions[emotion] /= targetsEmotions.length;
    }
    return averageEmotions;
  }

  render() {
    // get average emotion across all target keywords
    const averageEmotionsObj = this.calculateAvgEmotion(this.props.watsonEmotionResults.emotion.targets)

    // format chart.js react data
    let isDataPresent = (this.props.watsonEmotionResults ? true : false);
    let data = null;
    if (isDataPresent) { 
    data = {
      labels: Object.keys(averageEmotionsObj),
      datasets: [{
          label: 'Emotion density',
          data: Object.values(averageEmotionsObj),
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
          borderWidth: 1
      }],
    }
  } 

    console.log('data in EmotionChart: ', data);

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

    return (
      <section>
        <Bar className="chart" id='emotionChart' data={data} options={options} ></Bar>
        
      </section>
    );
  }

}