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
                  <a href="/"><td>
                    Home
                  </td></a>
                  <a href="/submit"><td>
                    Submit
                  </td></a>
                  <a href="/past"><td>
                    Past
                  </td></a>
                  <a href="/current"><td>
                    Current
                  </td></a>
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
