import React from 'react';
import Button from '../Button/Button';
import './style.css';

export default class Popout extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem(`user${this.props.player}`));
  }

  handleChange = event => {
    this.setState({ password: event.target.value }, () => localStorage.setItem(`user${this.props.player}`, JSON.stringify(this.state)));
  }

  render() {
    return (
      <div className='popout-wrapper' >
        <div className='popout-inner-cont'>
          <h3 className='popout-heading' >Player {this.props.player}</h3>

          <input
            className='input'
            type='text'
            placeholder='Password'
            autoComplete='nope'
            onChange={this.handleChange}
          />

          <Button txt='OK' handleClick={this.props.onClose} />
        </div>
      </div>
    );
  }
}