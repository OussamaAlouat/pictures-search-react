import React from 'react';
import './imageCard.css'

const ImageCard = (props) => {
  const { image } = props;
  return (
    <div className="card" style={ image.height > image.width ? { width: '300px' } : {}}>
      <img
        src={ image.urls.small }
        alt={ image.alt_description }
        id={ image.id }
        key={ image.id }
      />
      <div className="card-description">
        <span>
          <strong>Description:</strong> { image.description || image.alt_description }
        </span>
        <span>
          <strong>Likes:</strong> { image.likes }
          <i style={ {marginLeft : '4px'} } className="icon star"></i>
        </span>

        <span>
          <strong>Created at:</strong> { image.created_at }
        </span>
      </div>
    </div>
  )
}

export default ImageCard