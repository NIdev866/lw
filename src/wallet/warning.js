import React from 'react';
import {connect} from 'react-redux';

import './warning.css';

const Warning = props => {
  if(props.balance >= 0) return null;
  return <div className='warning'>WARNING! Negative balance</div>
}

const mapStateToProps = store => ({
  balance: store.wallet.balance
})

export default connect(mapStateToProps)(Warning)