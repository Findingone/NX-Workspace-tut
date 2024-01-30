import React from 'react';

/* eslint-disable-next-line */
export interface CounterProps {
  handleClick: Function,
  counter: number
}

const Counter = (props: CounterProps) => {
  return (
    <div >
      <h2>Increase counter value through React Component.</h2>
      <span>The value of counter as received in React: {props.counter} </span>
      <button onClick={() => { props.handleClick() }}>Increase Counter from react</button>
    </div>
  );
}

export default Counter;
