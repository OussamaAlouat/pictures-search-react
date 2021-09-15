import React from 'react';
import ImageCard from './ImageCard';

import './imageList.css';
import NoData from './NoData';

const ImageList = (props) => {
  const images  =  props.images.map(image => {
    return <ImageCard key={image.id} image={image}></ImageCard>
  });

  if (!images.length) {
    return <NoData/>
  }

  return(
    <div className="images-container">{ images}</div>
  )
}

export default ImageList;