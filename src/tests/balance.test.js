import React from 'react';
import {shallow} from '../wallet/warning';

import Balance from '../wallet/balance';

it('should display the balance passed into props with pound sign before it', () => {
  const shallowComponent = shallow(
    <Balance balance={6}/>
  );
  expect(shallowComponent.find('.balance').text()).toBe('£6')
});
