import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('testing Header Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a Header component snapshot', () => {
    const wrapper = shallow(<Header />).find('#app-title');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});