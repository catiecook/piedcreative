import React, { Component } from 'react'
import '../App.css';

class Nav extends Component {
  render() {
    return (
      <section className="header-all">
        <section id="header-all-text">
          <div>
            P
          </div>
          <div>
            I
          </div>
          <div>
            E
          </div>
          <div>
            D
          </div>

          <div>
            C
          </div>
          <div>
            R
          </div>
          <div>
            E
          </div>
          <div>
            A
          </div>
          <div>
            T
          </div>
          <div>
            I
          </div>
          <div>
            V
          </div>
          <div>
            E
          </div>
        </section>
        <section>
          <nav className="all-nav">
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
        </section>
      </section>
    );
  }
}
export default Nav;
