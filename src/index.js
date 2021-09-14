import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  render(){
    return <h1>hELLO TO NEW PROJECT</h1>
  }

}

ReactDom.render(
  <App />,
  document.querySelector('#root')
)