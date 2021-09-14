import React from 'react';

class SearchBar extends React.Component {
  state = { item: '' }

  onInputChange(event) {
    const { value } = event.target
    this.setState({ item: value })
  }

  render () {
    return(
    <div className="ui fluid icon input">
      <input
        type="text"
        placeholder="Search an image ..."
        onChange={(e) => this.onInputChange(e)}
      />
      <i className="search icon"></i>
    </div>
    )
  }
}

export default SearchBar;
