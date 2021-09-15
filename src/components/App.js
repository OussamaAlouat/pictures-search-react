import React from 'react';
import api from '../api/api';
import SearchBar from './SearchBar';

import ImageList from './ImageList';
class App extends React.Component  {
  state = { elements: '' }

  onSearchSubmit = async (term) => {
    const images = await api.get('/search/photos', {
      params: {
        query: term
      },
    });

    this.setState({ elements: images.data.results })
  }

  render () {
    return (
      <div>
        <div className="header-container">
          <h1>React Picture Search</h1>
        </div>
        <div className="container">
          <SearchBar onSubmit={this.onSearchSubmit} />

          <ImageList images={this.state.elements}></ImageList>

        </div>
      </div>
    );
  }
}

export default App;
