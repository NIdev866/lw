import React from 'react';
import {shallow} from '../wallet/warning';

import Button from '../wallet/button';

it('displays a plus if increase prop is passed down', () => {
  const shallowComponent = shallow(
    <Button increase />
  );
  expect(shallowComponent.find('.button').text()).toBe('+')
});

it('displays a minus if decrease prop is passed down', () => {
  const shallowComponent = shallow(
    <Button decrease />
  );
  expect(shallowComponent.find('.button').text()).toBe('-')
});
