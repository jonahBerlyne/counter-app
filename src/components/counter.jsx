import React, { Component } from 'react';

class Counter extends React.Component {
 // state = { 
 //  value: this.props.counter.value,
 //  tags: []
 // };

 // constructor() {
 //  // super allows constructor to be used:
 //  super();
 // // used to bind event handlers:
 //  this.handleIncrement = this.handleIncrement.bind(this);
 // }

 // handleIncrement = () => {
 //  // Cannot modify props outside of state:
 //  // this.props.value = 0
 //  this.setState({ value: this.state.value + 1 });
 // };

 // renderTags() {
 //  if (this.state.tags.length === 0) return <p>No tags boss!</p>;

 //  return <ul>
 //    { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
 //   </ul>;
 // }

 styles = {
  fontSize: 20,
  fontWeight: "bold"
 };

 render() { 

  return <React.Fragment>
   {/* Renders the jsx element: */}
   {this.props.children}
   {/* Uses bootstrap classes: */}
   <span style={{fontSize: 30}} className={this.getBadgeClasses()}>{this.formatCount()}</span>

   <button style={this.styles} onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>

   <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>

   {/* Conditionally render content with: "Condition + && + Whatever we want to render": */}
   {/* { this.state.tags.length === 0 && "We need a new tag" }
   { this.renderTags() } */}

   </React.Fragment>;
 }

 getBadgeClasses() {
  let classes = "badge m-2 badge-";
  classes += (this.props.counter.value === 0) ? "warning" : "primary";
  return classes;
 }

 formatCount() {
  // Destructures the object:
  const { value } = this.props.counter;
  return value === 0 ? "Zero" : value;
 }
}
 
export default Counter;