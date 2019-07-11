import React from 'react';
import ReactDOM from 'react-dom';
import SentimentChart from './SentimentChart';
import sampleState from '../../sampleState.js';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


describe('testing SentimentChart Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SentimentChart watsonEmotionResults={sampleState.watsonEmotionResults} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a SentimentChart with watsonEmotionResults prop', () => {
    const wrapper = shallow(<SentimentChart
      watsonEmotionResults={sampleState.watsonEmotionResults}
    />).find('.sentiment_chart');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

