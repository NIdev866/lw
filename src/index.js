import React from 'react';
import ReactDOM from 'react-dom';

import Wallet from './wallet';

ReactDOM.render(
  <Wallet />,
  document.getElementById('app'),
);
if (module.hot) {
  module.hot.accept();
}
