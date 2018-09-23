export const SET_BALANCE = 'SET_BALANCE';
export const INCREASE_BALANCE = 'INCREASE_BALANCE';
export const DECREASE_BALANCE = 'DECREASE_BALANCE';

export const setBalance = newBalance => ({
  type: SET_BALANCE,
  payload: newBalance
});

export const increaseBalance = () => ({
  type: INCREASE_BALANCE
});

export const decreaseBalance = () => ({
  type: DECREASE_BALANCE
});