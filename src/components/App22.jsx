import React from 'react';

// Greeting component with default props
function Greeting({ name = 'Guest', age = 25 }) {
  return <h1>Hello, {name}. You are {age} years old.</h1>;
}

export default Greeting;
