import React, { Component } from 'react';
//css import
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
          <div>
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;
