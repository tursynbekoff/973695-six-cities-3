import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withHover from './with-hover.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should change Component's activeMapPin flag with the HOC's toggler`, () => {
  const Component = () => <span />;
  const ComponentWrapped = withHover(Component);
  const id = 2;

  const wrapper = shallow(<ComponentWrapped />);
  expect(wrapper.props().activeMapPin).toBe(false);
  wrapper.props().onHoverActiveMapPin(id);
  expect(wrapper.props().activeMapPin).toBe(id);
  wrapper.props().onHoverResetMapPin();
  expect(wrapper.props().activeMapPin).toBe(false);
});
