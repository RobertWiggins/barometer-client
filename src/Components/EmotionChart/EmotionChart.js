import React from 'react';
import './EmotionChart.css';
import {Bar, Radar, Polar} from 'react-chartjs-2';

export default class EmotionChart extends React.Component {

  

  render() {

    // format chart.js react data
    let isDataPresent = (this.props.watsonEmotionResults ? true : false);
    let data = null;
    if (isDataPresent) { 
    data = {
      labels: Object.keys(this.props.watsonEmotionResults.emotion.targets[0].emotion),
      datasets: [{
          label: 'Emotion density',
          data: Object.values(this.props.watsonEmotionResults.emotion.targets[0].emotion),
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
        text: 'emotion spectrum',
        fontSize: 22,
        fontColor: '#000000'
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