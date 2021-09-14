import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

import ImageList from './ImageList';
class App extends React.Component  {
  state = { elements: '' }

  onSearchSubmit = async (term) => {
    console.log(term)
    const images = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 3a206d4d6f404f73ce5e0665c76f2c93d5dce476eaf6e420435f70d56f96fe1a'
      }
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
