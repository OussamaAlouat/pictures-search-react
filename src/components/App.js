import React from 'react';
import api from '../api/api';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './app.css'
import Spiner from './Spiner';
class App extends React.Component  {
  state = { elements: [], spiner: false, term: '' }

  onSearchSubmit = async (term) => {
    this.setState({ spiner: true })
    const images = await api.get('/search/photos', {
      params: {
        query: term
      },
    });

    this.setState({ elements: images.data.results, spiner: false, term: term })
    document.getElementById('result').style.display = 'flex'
  }

  getContentToRender(){
    if (this.state.spiner) {
      return (
        <div style={{ height: '100%' }}>
          <Spiner/>
        </div>
      )
    } else {
      return (
        <div style= {{ height: '100%' }}>
          <SearchBar search={ this.state.term } onSubmit={this.onSearchSubmit} />
          <div id="result">Results of: { this.state.term }</div>
          <ImageList images={this.state.elements}></ImageList>
        </div>

      )
    }
  }

  render () {
    return (
      <div style={{ height: '100%' }}>
        <div className="header-container">
          <h1>React Picture Search</h1>
        </div>
        <div className="container">
          {this.getContentToRender()}
        </div>
      </div>
    );
  }
}

export default App;
