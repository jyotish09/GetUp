import React from 'react';
import TimeData from './timeData.jsx';

export default class App extends React.Component {
  render() {
    return (<div style={{
        textAlign: 'center',
        fontFamily: 'helvetica'
      }} className="container">
      <h1>Get Up</h1>
      <TimeData/>
    </div>);
  }
}
