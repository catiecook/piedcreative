import React, { Component } from 'react'
import Nav from '../partials/Nav';

class Current extends Component {
  render() {
    return (
      <section className="App">
        <header className="header-all">
          <Nav>{this.props.children}</Nav>
        </header>
        <div>
          Current zine will be displayed here
        </div>
      </section>
    );
  }
}
export default Current;
