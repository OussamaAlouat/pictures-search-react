import React from 'react';

const ImageCard = (props) => {
  const { image } = props;
  console.log(image)
  return (
    <div className="card">
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
        </span>

        <span>
          <strong>Created at:</strong> { image.created_at }
        </span>
      </div>
    </div>
  )
}

export default ImageCard