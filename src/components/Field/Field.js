import React from 'react';
import Square from '../Square/Square';
import './style.css';

export default class Field extends React.Component {
  // squares = [];

  // squaresArrange() {
  //   for (let i = 0; i < 25; i++) {
  //     this.squares.push(<Square key={i} />)
  //   }
  // }

  render() {
    // this.squaresArrange()
    return (
      <div className='field-wrapper'>
        {/* {[...this.squares]} */}
        <div>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    );
  }
}