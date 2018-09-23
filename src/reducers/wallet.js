import {
  SET_BALANCE,
  INCREASE_BALANCE,
  DECREASE_BALANCE,
} from '../actions/wallet';

const defaultState = {
  balance: 0
};

function WalletReducer(state = defaultState, action) {
  switch(action.type) {
    case SET_BALANCE:
      return {balance: action.payload};
    case INCREASE_BALANCE:
      return {balance: state.balance+1};
    case DECREASE_BALANCE:
      return {balance: state.balance-1};
    default:
      return state;
  }
}

export default WalletReducer;