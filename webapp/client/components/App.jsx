import React from 'react';
import TimeData from './timeData.jsx';

export default class App extends React.Component {
  render() {
    return (<div style={{
        textAlign: 'center',
        fontFamily: 'helvetica',
        paddingTop: '1%'
      }} className="container">
      <h1 style={{color: '#ff6b6b'}}>Get Up</h1>
      <TimeData/>
    </div>);
  }
}
