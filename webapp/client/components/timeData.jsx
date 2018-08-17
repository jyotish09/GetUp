import React from 'react';
import 'bootstrap/less/bootstrap.less';
import {ButtonToolbar, Button, Glyphicon} from 'react-bootstrap';
import moment from 'moment';
import cx from 'classnames';
import style from './styles.css';
export default class TimeData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment()
    }

    console.group("TimeData constructor");
    console.log("moment().format('LT')");
    console.log(moment().format('LT'));
    console.log('style');
    console.log(style);
    console.groupEnd();

  }

  formatter(value) {
    return `${value}%`;
  }

  render() {
    return (<div className="">
      <div className={cx(style.timeButtons)}>
        <div className={cx(style.hr)}>
          <Button className={cx(style.chevronUp)} bsSize="small"><Glyphicon glyph="glyphicon glyphicon-chevron-up"/></Button>
            12
          <Button className={cx(style.chevronDown)} bsSize="small"><Glyphicon glyph="glyphicon glyphicon-chevron-down"/></Button>
          <div></div>
        </div>
        <div className={cx(style.min)}>
          <Button className={cx(style.chevronUp)} bsSize="small"><Glyphicon glyph="glyphicon glyphicon-chevron-up"/></Button>
            00
          <Button className={cx(style.chevronDown)} bsSize="small"><Glyphicon glyph="glyphicon glyphicon-chevron-down"/></Button>
        </div>
      </div>
      <br/>
      <p>
        <Button bsStyle="info" bsSize="large" className={cx(style.submit)}>
          Notification @Time
        </Button>
      </p>
    </div>);
  }
}
