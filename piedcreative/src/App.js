import React, { Component } from 'react';
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
          <p>
            Pied Creative is an art community.
          </p>
          <p>
            Upload a work of your art, lets us know who you are, or leave it a mystery. Every month, the works will be compiled and displayed in our online zine.
          </p>

          {/* <form action="#">
            <input type="file" name="pic" accept="image/*"></input>
            <input type="submit"></input>
          </form> */}

        </section>
      </div>
    );
  }
}

// class Nav extends Component {
//   render() {
//     return (
//
//     )
//   }
// }

export default App;
