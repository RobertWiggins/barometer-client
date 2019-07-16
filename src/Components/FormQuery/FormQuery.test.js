import React from 'react';
import ReactDOM from 'react-dom';
import FormQuery from './FormQuery';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../../App';

describe('testing FormQuery Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <FormQuery
        handleSearch={App.handleSearch}
        handleSubmitQuery={App.handleSubmitQuery}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a FormQuery component snapshot', () => {
    const wrapper = shallow(
      <FormQuery
        handleSearch={App.handleSearch}
        handleSubmitQuery={App.handleSubmitQuery}
      />
    ).find('#searchArea');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
