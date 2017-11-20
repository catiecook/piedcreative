import React, { Component } from 'react'
import '../App.css';
// import Nav, { Component } from '../partials/Nav'
// import featured from '../img/featured.jpg'

class Home extends Component {
  render() {
    return (
      <section className="App">
        <header className="header-home">
          <section id="header-home-pied">
            <detail>
              P
            </detail>
            <detail>
              I
            </detail>
            <detail>
              E
            </detail>
            <detail>
              D
            </detail>
          </section>
          <section id="header-home-creative">
            <detail>
              C
            </detail>
            <detail>
              R
            </detail>
            <detail>
              E
            </detail>
            <detail>
              A
            </detail>
            <detail>
              T
            </detail>
            <detail>
              I
            </detail>
            <detail>
              V
            </detail>
            <detail>
              E
            </detail>
          </section>
        </header>
          <nav className="home-nav">
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

          <div className="featured">
            <section className="featured-image">
            </section>
            <section className="featured-writing">
              <h2>
                Featured Work
              </h2>
              <h5>
                Li Po
              </h5>
              <p>
                words and things and poems and what not words and things and poems words and things and poems words and things and poems words and things and poems...
              </p>
            </section>
          </div>
      </section>
    );
  }
}
export default Home;
