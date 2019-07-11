import React from 'react';
import ReactDOM from 'react-dom';
import SearchHistory from './SearchHistory';
import sampleState from '../../sampleState.js';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../../App'

describe('testing SearchHistory Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchHistory handleSubmitQuery={App.handleSubmitQuery}
      queries={sampleState.queries} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a SearchHistory list with queries and handleSubmit props', () => {
    const wrapper = shallow(<SearchHistory handleSubmitQuery={App.handleSubmitQuery}
      queries={sampleState.queries} />).find('#searchHistory');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});