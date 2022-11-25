import React from 'react';
import Square from '../../components/Square/Square';
import Button from '../../components/Button/Button';
import './style.css';

export default class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: true,
      user1: JSON.parse(localStorage.getItem('user1')),
      attackUser1: [],
      user2: JSON.parse(localStorage.getItem('user2')),
      attackUser2: {
        isAttacked: [],
      },
    }
  }

  handleClick = () => { console.log("HELLO!") };

  handleAttack = (key) => {
    if (this.state.activePlayer) {
      return this.setState(() => {
        return {
          isChecked: this.state.user2.isAttacked.includes(key)
            ? this.state.user2.isAttacked.filter((el) => el !== key)
            : [...this.state.user2.isAttacked, key],
        }
      }, () => localStorage.setItem('user2', JSON.stringify(this.state.user2)))
    }
  }

  render() {
    return (
      <div className='game-page-wrapper' >
        <div className='game-page-inner-cont' >
          <div className='player-cont' >
            <div className='game-page-heading-cont' >
              <h1 className='game-page-heading' >Player 1</h1>
              {this.state.activePlayer && <p className='game-page-desc' >Active</p>}
            </div>
            <div className='player-field-cont' >
              {[...(new Array(25))].map((_, i) => (
                <Square
                  key={i}
                  id={i}
                  isChecked={this.state.activePlayer ? this.state.user1.isChecked : []}
                  isVessel={this.state.activePlayer ? this.state.user1.isVessel : []}
                  isAttacked={this.state.activePlayer ? this.state.user1.isAttacked : []}
                  handleClick={this.handleClick}
                />
              ))}
            </div>
          </div>

          <div className='player-cont' >
            <div className='game-page-heading-cont' >
              <h1 className='game-page-heading' >Player 2</h1>
              {!this.state.activePlayer && <p className='game-page-desc' >Active</p>}
            </div>
            <div className='player-field-cont' >
              {[...(new Array(25))].map((_, i) => (
                <Square
                  key={i}
                  id={i}
                  isChecked={!this.state.activePlayer ? this.state.user2.isChecked : []}
                  isVessel={!this.state.activePlayer ? this.state.user2.isVessel : []}
                  isAttacked={!this.state.activePlayer ? this.state.user2.isAttacked : []}
                  handleClick={this.handleClick}
                />
              ))}
            </div>
          </div>
        </div>
        <Button
          handleClick={this.handleAttack}
          txt='Attack'
        />
      </div>
    );
  }
}