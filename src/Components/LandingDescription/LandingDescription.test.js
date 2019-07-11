import React from 'react';
import ReactDOM from 'react-dom';
import LandingDescription from './LandingDescription';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../../App';

describe('testing LandingDescription Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <LandingDescription onLandingButtonClick={App.onLandingButtonClick} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a LandingDescription component snapshot', () => {
    const wrapper = shallow(
      <LandingDescription onLandingButtonClick={App.onLandingButtonClick} />
    ).find('#landingPane');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
