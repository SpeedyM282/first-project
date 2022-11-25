import React from 'react';
import StartPage from './pages/StartPage/StartPage';
import ArrangementPage from './pages/ArrangementPage/ArrangementPage';
import GamePage from './pages/GamePage/GamePage';
import Button from './components/Button/Button';
import Popout from './components/Popout/Popout';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      pageSwitch: 1,
    };
  }

  componentDidMount() {
    const data = {
      isChecked: [],
      isVessel: [],
      isAttacked: [],
      password: '',
    };

    localStorage.setItem('user1', JSON.stringify(data));
    localStorage.setItem('user2', JSON.stringify(data));
  }

  togglePage = (val) => {
    if (val == 'Confirm' || val == 'OK') {
      this.setState(prevState => ({
        isModalOpen: !prevState.isModalOpen
      }));
    }

    this.setState(prevState => {
      if (prevState.pageSwitch === -3) {
        return { pageSwitch: 1 };
      } else if (val != 'OK') {
        return { pageSwitch: prevState.pageSwitch - 1 };
      }
    });
  }

  render() {
    const txt = {
      '1': 'Start',
      '0': 'Confirm',
      '-1': 'Confirm',
      '-2': 'Play',
      '-3': 'Restart'
    }
    const p = this.state.pageSwitch;

    return (
      <div className='App'>
        {p === 1 &&
          (<StartPage
            heading={'Naval Combat'}
            description={'Strategy type guessing game for two players.'}
          />)}

        {p === 0 && (<ArrangementPage player='1' />)}

        {p === -1 && (<ArrangementPage player='2' />)}

        {p === -2 &&
          (<StartPage
            heading='Are you ready?'
            description='If you hit vessel the square will turn into red color otherwise yellow color. When you are ready click "play" button.'
          />)
        }

        {p === -3 && <GamePage />}

        <Button
          handleClick={this.togglePage}
          txt={txt[`${p}`]}
        />

        {this.state.isModalOpen && (
          <Popout
            id="modal"
            isOpen={this.state.isModalOpen}
            onClose={this.togglePage}
            player={p == -1 ? '1' : '2'}
          />
        )}
      </div>
    )
  }
}