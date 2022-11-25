import React from 'react';
import Square from '../../components/Square/Square';
import './style.css';

export default class ArrangementPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem(`user${this.props.player}`))
  }

  handleClick = (key) => {
    return this.setState(() => {
      if (this.state.isChecked.length == 8) {
        alert('You can not arrange more than 8 vessels!');
        return this.state.isChecked;
      }
      return {
        isChecked: this.state.isChecked.includes(key)
          ? this.state.isChecked.filter((el) => el !== key)
          : [...this.state.isChecked, key],
      }
    }, () => localStorage.setItem(`user${this.props.player}`, JSON.stringify(this.state)))
  }

  render() {
    return (
      <div className='arrangement-page-wrapper' >
        <div className='arrangement-page-heading-cont' >
          <h1 className='arrangement-page-heading' >Player {this.props.player}</h1>
          <p className='arrangement-page-description' >You can arrange maximum 8 vessels!</p>
        </div>
        <div className='field-wrapper' >
          {[...(new Array(25))].map((_, i) => (
            <Square
              key={i}
              id={i}
              isChecked={this.state.isChecked}
              isVessel={this.state.isVessel}
              isAttacked={this.state.isAttacked}
              handleClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

