import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component  {
  render () {
    return (
      <div>
        <div className="header-container">
          <h1>React Picture Search</h1>
        </div>
        <div className="container">
          <SearchBar></SearchBar>

        </div>
      </div>
    );
  }
}

export default App;
