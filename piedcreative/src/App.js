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
        <section className="container">
          <nav className="nav">
            <table>
              <tbody>
                <tr>
                  <td>
                    <a href="/">Home</a>
                  </td>
                  <td>
                    <a href="/submit">Submit</a>
                  </td>
                  <td>
                    <a href="/past">Past</a>
                  </td>
                  <td>
                    <a href="/current">Current</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </nav>
          <div>
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
