import React from 'react';
import ReactDOM from 'react-dom';
import Wallet from '../wallet/wallet';

it('wallet renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Wallet />, div);
  ReactDOM.unmountComponentAtNode(div);
});
