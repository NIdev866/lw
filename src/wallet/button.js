import React from 'react';
import {connect} from 'react-redux';

import {
  increaseBalance,
  decreaseBalance
} from '../actions/wallet';
import './button.css';

const Button = props => (
  <div
    className='button'
    onClick={() => {
      if(props.increase) {
        props.dispatch(increaseBalance())
      }
      else if(props.decrease) {
        props.dispatch(decreaseBalance())
      }
    }}
  >
    {props.increase && "+"}
    {props.decrease && "-"}
  </div>
)

export default connect()(Button)