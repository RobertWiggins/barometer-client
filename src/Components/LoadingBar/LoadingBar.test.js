import React from 'react';
import ReactDOM from 'react-dom';
import LoadingBar from './LoadingBar';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('testing LoadingBar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoadingBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('testing LoadingBar component snapshot', () => {
    const wrapper = shallow(<LoadingBar />).find('.container');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});