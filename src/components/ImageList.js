import React from 'react';
import ImageCard from './ImageCard';

 function showImages (im) {
  const images = [];
  for(const elem of im) {
    images.push(
      <ImageCard key={elem.id} image={elem}></ImageCard>
    )
  }

  return images;
}

const ImageList = (props) => {
  const images  = showImages(props.images);
  return <div className="images-container">{images}</div>
}

export default ImageList;