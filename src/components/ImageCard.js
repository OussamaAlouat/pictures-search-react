import React from 'react';
import './imageCard.css'

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 300 }
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);

  }

  setSpans = () =>{
    const height = this.imageRef.current.clientHeight;
    const width = this.imageRef.current.clientWidth;
    if (height > width || width >=300) {
      this.setState({ width: 275 })
    } else {
        this.setState({ width })
    }
  }

  render () {
    const { image } = this.props;

    return (
      <div className="card" >
        <img
          ref={this.imageRef}
          src={ image.urls.small }
          alt={ image.alt_description }
          id={ image.id }
          style={ { width: `${this.state.width}px` } }
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
}

export default ImageCard