import React, {Component} from 'react';
import {connect} from 'react-redux';

import Balance from './balance.js';
import Button from './button.js';
import Warning from './warning.js';
import './wallet.css';

import {setBalance} from "../actions/wallet";

class Wallet extends Component {
  componentDidMount() {
    const props = this.props;
    fetch('https://codepen.io/andismith/pen/oqzxyP.js')
      .then(response => response.json().then(data => {
        props.dispatch(setBalance(data.balance))
      }))
  }
  render(){
    return(
      <div>
        <div className='wallet'>
          <Balance />
          <div className='buttons'>
            <Button increase />
            <Button decrease />
          </div>
        </div>
        <Warning />
      </div>
    )
  }
}

export default connect()(Wallet);