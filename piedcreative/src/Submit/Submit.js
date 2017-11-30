import React, { Component } from 'react'
import Nav from '../partials/Nav'

import './submit.css'

import image1 from '../img/smpl8.jpg'
import image2 from '../img/smpl2.jpg'
import image3 from '../img/smpl10.jpg'

class Sumbit extends Component {
  render() {
    return (
      <section className="App">
        <header className="header-all">
          <Nav>{this.props.children}</Nav>
        </header>

        {/* <p className="general">
          Submit your work for our first print in 2018!
          <br />
          <mark>
            What we're looking for:
          </mark>
          <span className="emphasized">
            Photography, Poems, Paintings, Illustrations, Embroideries, Pottery, Drawings, Tattoos...<br /><em>pretty much anything that you consider to be your art</em>
          </span>
          <mark>
            Please be respectful, only submit things you would be okaywith your grandma seeing.
          </mark>
        </p>
        <div className="submit">
          <input type="file"></input>
        </div>

        <section id="example">
          <img src={image1} alt="work sample" />
          <img src={image2} alt="work sample" />
          <img src={image3} alt="work sample" />
        </section> */}

        <section className="outer-row-container">
          <h3>Build Your Page</h3>
          <div className="medium-container">
            <p>Treat this like your own personal gallery wall. Upload a photo (or a few). If you want, give us a little description of the work. Have some a writing piece to submit? Go for it!</p>
            <p>We have a few layouts available depending on what you’re submitting.</p>

            <p>Click on the type of piece you’ll be giving us and we will show you some of the ways you can display your work on the site.</p>
          </div>
        </section>
      </section>
    );
  }
}
export default Sumbit;
