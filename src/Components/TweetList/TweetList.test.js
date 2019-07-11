import React from 'react';
import ReactDOM from 'react-dom';
import TweetList from './TweetList';
import sampleState from '../../sampleState.js';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import { Adapter, Enzyme } from 'enzyme-adapter-react-15';

// Enzyme.configure({ adapter: new Adapter() })


describe('testing TweetList Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TweetList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a list of tweets with tweets prop', () => {
    const wrapper = shallow(<TweetList tweets={sampleState.tweets} />).find('.tweet_list');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

