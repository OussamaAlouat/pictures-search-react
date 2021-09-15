import React from 'react';

const Spiner = () => {
  return (
  <div className="ui segment" style={ {height: '100%'} }>
    <div className="ui active dimmer">
      <div className="ui text loader">Loading</div>
    </div>
    <p></p>
  </div>
  )
}

export default Spiner;