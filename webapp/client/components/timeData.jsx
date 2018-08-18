import React from 'react';
import 'bootstrap/less/bootstrap.less';
import {ButtonToolbar, Button, Glyphicon, Label, Tooltip} from 'react-bootstrap';
import moment from 'moment';
import cx from 'classnames';
import style from './styles.css';
export default class TimeData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment(),
      hr: '04',
      min: '30'
    }

    console.groupCollapsed("TimeData constructor");
    console.log("moment().format('LT')");
    console.log(moment().format('LT'));
    console.groupEnd();

    // this.timeManipulate = this.timeManipulate.bind(this);

  }

  timeManipulate(diff, str) {
    console.group("timeManipulate (diff)");
    console.log(str+" "+diff);
    let {hr, min} = this.state;
    hr = parseInt(hr);
    min = parseInt(min);

    hr = (str == 'hr')
      ? (hr + diff) % 12
      : hr;
    min = (str == 'min')
      ? (min + diff) % 60
      : min;

    // if 0 , should return to 11/59
    hr = (hr == -1)
      ? 11
      : hr;
    min = (min == -1)
      ? 59
      : min;

    // Single Digits must be 2 Digits String
    hr = hr < 10
      ? '0' + hr
      : String(hr);
    min = min < 10
      ? '0' + min
      : String(min);

    this.setState({hr: hr, min: min});

    console.groupEnd();
  }

  render() {
    let {hr, min} = this.state;
    return (<div className="">
      <div className={cx(style.timeButtons)}>
        <div className={cx(style.hr)}>
          <Button onClick={this.timeManipulate.bind(this, 1, 'hr')} className={cx(style.chevronUp)} bsSize="small"><Glyphicon glyph="glyphicon glyphicon-chevron-up"/></Button>
          {hr}
          <Button onClick={this.timeManipulate.bind(this, -1, 'hr')} className={cx(style.chevronDown)} bsSize="small"><Glyphicon glyph="glyphicon glyphicon-chevron-down"/></Button>
          <div></div>
        </div>
        <div className={cx(style.min)}>
          <Button onClick={this.timeManipulate.bind(this, 1, 'min')} className={cx(style.chevronUp)} bsSize="small"><Glyphicon glyph="glyphicon glyphicon-chevron-up"/></Button>
          {min}
          <Button onClick={this.timeManipulate.bind(this, -1, 'min')} className={cx(style.chevronDown)} bsSize="small"><Glyphicon glyph="glyphicon glyphicon-chevron-down"/></Button>
        </div>
      </div>
      <div id="am" className={cx(style.am)}>
        AM
      </div>
      <p>
        <Button bsStyle="info" bsSize="large" className={cx(style.submit)}>
          Notification @Time
        </Button>
      </p>
    </div>);
  }
}
