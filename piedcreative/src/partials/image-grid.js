import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: '../img/smpl1.jpg',
    title: 'sample',
    author: 'unsplash',
    alt: 'photo',
  },
  {
    img: '../img/smpl2.jpg',
    title: 'sample',
    author: 'unsplash',
    alt: 'photo',
  },
  {
    img: '../img/smpl3.jpg',
    title: 'sample',
    author: 'unsplash',
    alt: 'photo',
  },
  {
    img: '../img/smpl4.jpg',
    title: 'sample',
    author: 'unsplash',
    alt: 'photo',
  },
  {
    img: '../img/smpl5.jpg',
    title: 'sample',
    author: 'unsplash',
    alt: 'photo',
  },
  {
    img: '../img/smpl6.jpg',
    title: 'sample',
    author: 'unsplash',
    alt: 'photo',
  },
  {
    img: '../img/smpl7.jpg',
    title: 'sample',
    author: 'unsplash',
    alt: 'photo',
  },
  {
    img: '../img/smpl8.jpg',
    title: 'sample',
    author: 'unsplash',
    alt: 'photo',
  },
  {
    img: '../img/smpl9.jpg',
    title: 'sample',
    author: 'unsplash',
    alt: 'photo',
  },
  {
    img: '../img/smpl10.jpg',
    title: 'sample',
    author: 'unsplash',
    alt: 'photo',
  },
  {
    img: '../img/smpl12.jpg',
    title: 'sample',
    author: 'unsplash',
    alt: 'photo',
  },
  {
    img: '../img/smpl13.jpg',
    title: 'sample',
    author: 'unsplash',
    alt: 'photo',
  },
  {
    img: '../img/smpl14.jpg',
    title: 'sample',
    author: 'unsplash',
    alt: 'photo',
  },
  {
    img: '../img/smpl15.jpg',
    title: 'sample',
    author: 'unsplash',
    alt: 'photo',
  },
  {
    img: '../img/smpl16.jpg',
    title: 'sample',
    author: 'unsplash',
    alt: 'photo',
  }
];

const PastWorkGrid = () => (

  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Past Works</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          Hello
          <img src={tile.img} alt="example" />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default PastWorkGrid;
