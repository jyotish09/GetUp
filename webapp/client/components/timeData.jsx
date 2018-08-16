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
    console.log('style.timeButtons');
    console.log(style.timeButtons);
    console.groupEnd();

  }
  render() {
    return (<div className="">
      <div className={cx(style.timeButtons)}>
        <ButtonToolbar>
          <Button bsStyle="primary">
            <Glyphicon glyph="glyphicon glyphicon-chevron-up"/>
          </Button>
          <Button bsStyle="primary">
            <Glyphicon glyph="glyphicon glyphicon-chevron-down"/>
          </Button>
      </ButtonToolbar>
    </div>
  <br />
      <p>
      <Button bsStyle="info" bsSize="large">
        Notification @Time
      </Button>
    </p>
    </div>);
  }
}
