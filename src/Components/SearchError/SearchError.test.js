import React from 'react';
import ReactDOM from 'react-dom';
import SearchError from './SearchError';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('testing SearchError Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchError />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a SearchError component snapshot', () => {
    const wrapper = shallow(<SearchError />).find('#searchError');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});