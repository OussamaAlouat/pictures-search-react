import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component  {
  onSearchSubmit(term) {
    console.log('Term: ', term)
  }

  render () {
    return (
      <div>
        <div className="header-container">
          <h1>React Picture Search</h1>
        </div>
        <div className="container">
          <SearchBar onSubmit={this.onSearchSubmit} />

        </div>
      </div>
    );
  }
}

export default App;
