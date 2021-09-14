import React from 'react';

class SearchBar extends React.Component {
  render () {
    return(
    <div className="ui fluid icon input">
      <input type="text" placeholder="Search a very wide input..."/>
      <i className="search icon"></i>
    </div>
    )
  }
}

export default SearchBar;
