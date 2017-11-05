import React, { Component } from 'react';
//css import
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <section className="pied-logo">
            pied_creative
          </section>
        </header>
        <section className="about">
          <div>
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
