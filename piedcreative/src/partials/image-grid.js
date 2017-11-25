import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import image2 from '../img/smpl2.jpg'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '75%',
    // width: '30%'
  },
  gridList: {
    // background: '#ffd699'
  },
};

const tilesData = [
  {
    img: '../img/smpl1.jpg',
    title: 'sample',
    author: 'unsplash',
  },
  {
    img: '../img/smpl2.jpg',
    title: 'sample',
    author: 'unsplash',
  },
  {
    img: '../img/smpl3.jpg',
    title: 'sample',
    author: 'unsplash',
  },
  {
    img: '../img/smpl4.jpg',
    title: 'sample',
    author: 'unsplash',
  },
  {
    img: '../img/smpl5.jpg',
    title: 'sample',
    author: 'unsplash',
  },
  {
    img: '../img/smpl6.jpg',
    title: 'sample',
    author: 'unsplash',
  },
  {
    img: '../img/smpl7.jpg',
    title: 'sample',
    author: 'unsplash',
  },
  {
    img: '../img/smpl8.jpg',
    title: 'sample',
    author: 'unsplash',
  },
  {
    img: '../img/smpl9.jpg',
    title: 'sample',
    author: 'unsplash',
  },
  {
    img: '../img/smpl10.jpg',
    title: 'sample',
    author: 'unsplash',
  },
  {
    img: '../img/smpl12.jpg',
    title: 'sample',
    author: 'unsplash',
  },
  {
    img: '../img/smpl13.jpg',
    title: 'sample',
    author: 'unsplash',
  },
  {
    img: '../img/smpl14.jpg',
    title: 'sample',
    author: 'unsplash',
  },
  {
    img: '../img/smpl15.jpg',
    title: 'sample',
    author: 'unsplash',
  },
  {
    img: '../img/smpl16.jpg',
    title: 'sample',
    author: 'unsplash',
  }
];

const PastWorkGrid = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={200}
      style={styles.gridList} cols={4.2}
    >
      <Subheader>Past Works</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          // title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="black" /></IconButton>}
        >
        <img src={image2} alt="work sample" />

        </GridTile>
      ))}
    </GridList>
  </div>
);

export default PastWorkGrid;
