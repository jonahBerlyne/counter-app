import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends React.Component {

 render() {

  // Object destructuring for functions:
  const { onReset, counters, onDelete, onIncrement } = this.props;

  return (
  <div>
   <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
   {counters.map(counter => 
   <Counter key={counter.id}
   // Event bubbled to parent of component:
   onDelete={onDelete} 
   onIncrement={onIncrement} 
   counter={counter}>
    <h4>Counter #{counter.id}:</h4>
    </Counter>
    )}
  </div>
  );
 }
}
 
export default Counters;