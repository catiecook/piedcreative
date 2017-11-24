import React, { Component } from 'react'
import image1 from '../img/smpl8.jpg'
import image2 from '../img/smpl2.jpg'
import image3 from '../img/smpl10.jpg'

class Sumbit extends Component {
  render() {
    return (
      <section className="App">
        <header className="header-all">
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
        </header>
        <div className="submit">
          <input type="file"></input>
        </div>

        <section id="example">
          <img src={image1} atl="work sample" />
          <img src={image2} atl="work sample" />
          <img src={image3} atl="work sample" />
        </section>


      </section>
    );
  }
}
export default Sumbit;
