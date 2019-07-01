// Imports the `React` module and the `Component` class from that module.
import React, { Component } from 'react';
import Alphabet from "./mystuff/alphabet";
// Creates an `App` class that is a child of the `Component` class.
class App extends Component {

  render() {
    
    return (

      <div className='app'>
        <Alphabet/>
      </div>

    );
  }
}

export default App;
