import React from 'react';
import ReactDOM from 'react-dom';
import EmotionChart from './EmotionChart';
import sampleState from '../../sampleState.js';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('testing EmotionChart Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <EmotionChart watsonEmotionResults={sampleState.watsonEmotionResults} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a EmotionChart with watsonEmotionResults prop', () => {
    const wrapper = shallow(
      <EmotionChart watsonEmotionResults={sampleState.watsonEmotionResults} />
    ).find('#emotionChart');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
