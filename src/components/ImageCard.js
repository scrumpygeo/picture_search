import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    // create reference to get details from element in DOM
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef);
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
