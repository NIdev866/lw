import React from 'react';
import {shallow} from '../wallet/warning';

import Warning from '../wallet/warning';

it('displays text warning when props.balance is less than 0', () => {
  const shallowComponent = shallow(
    <Warning balance={-3}/>
  );
  expect(shallowComponent.find('.warning').text()).toBe('WARNING! Negative balance')
});
