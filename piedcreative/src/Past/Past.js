import React, { Component } from 'react'
import PastWorkGrid from '../partials/image-grid'
import Nav from '../partials/Nav'

import './past.css'

class Past extends Component {
  render() {
    return (
      <section className="App">
        <header className="header-all">
          <Nav>{this.props.children}</Nav>
        </header>

        <PastWorkGrid>{this.props.children}</PastWorkGrid>

      </section>
    );
  }
}
export default Past;
