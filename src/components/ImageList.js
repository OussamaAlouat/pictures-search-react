import React from 'react';
import ImageCard from './ImageCard';

import './imageList.css';

const ImageList = (props) => {
  const images  =  props.images.map(image => {
    return <ImageCard key={image.id} image={image}></ImageCard>
  });

  return <div className="images-container">{ images}</div>
}

export default ImageList;