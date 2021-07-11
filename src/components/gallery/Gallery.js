// Header.js
import React from 'react';
import { StyledGallery } from './Gallery.Styled'
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/'
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/'
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/'
    }
  ];
  

const Gallery = () => {
    return (
        <StyledGallery >
            <h1>TMK BUILDS</h1>
            <div><ImageGallery items={images} showPlayButton={false} showThumbnails={false}/></div>
        </StyledGallery >
    )
};

export default Gallery;