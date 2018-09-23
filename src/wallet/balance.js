import React from 'react';
import {connect} from 'react-redux';

import './balance.css';

const Balance = props => (
  <div className='balance'>£{props.balance}</div>
);

const mapStateToProps = store => ({
  balance: store.wallet.balance
})

export default connect(mapStateToProps)(Balance);