import React from 'react';

 function showImages (im) {
  const images = [];
  console.log(im)
  for(const elem of im) {
    images.push(
      <img
        src={ elem.urls.small }
        alt={ elem.alt_description }
        id={elem.id}
        key={elem.id}
      />
    )
  }

  return images;
}

const ImageList = (props) => {
  const images  = showImages(props.images);
  return <div className="images-container">{images}</div>
}

export default ImageList;