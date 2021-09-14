import React from 'react';

class SearchBar extends React.Component {
  state = { item: '' }

  onInputChange(event) {
    const { value } = event.target
    this.setState({ item: value })
  }

  onKeyPressed(e) {
    if (e.key === 'Enter') {
      this.props.onSubmit(this.state.item)

    }
  }

  render () {
    return(
    <div className="ui fluid icon input">
      <input
        type="text"
        placeholder="Search an image ..."
        onChange={(e) => this.onInputChange(e)}
        value={ this.state.term }
        onKeyPress={ e => this.onKeyPressed(e) }
      />
      <i className="search icon"></i>
    </div>
    )
  }
}

export default SearchBar;
