import React from 'react';
import Button from './components/Button/Button';
// import Field from './components/Field/Field';
import StartPage from './pages/StartPage/StartPage';
import ArrangementPage from './pages/ArrangementPage/ArrangementPage';
import GamePage from './pages/GamePage/GamePage';
import './App.css';

export default class App extends React.Component {
  state = {
    pageSwitch: 1,
  }

  togglePage = () => {
    this.setState(prevState => {
      if (prevState.pageSwitch === -3) {
        return { pageSwitch: 1 };
      } else {
        return { pageSwitch: prevState.pageSwitch - 1 };
      }
    });
    console.log(this.state.pageSwitch)
  }

  render() {
    return (
      <div className='App'>
        {
          this.state.pageSwitch === 1 ?
            <StartPage
              heading='Naval Combat'
              description='Strategy type guessing game for two players'
            /> :
            this.state.pageSwitch === 0 ?
              <ArrangementPage player='1' /> :
              this.state.pageSwitch === -1 ?
                <ArrangementPage player='2' /> :
                this.state.pageSwitch === -2 ?
                  <StartPage
                    heading='Are you ready?'
                    description='If you are ready click "play" button'
                  /> :
                  <GamePage />
        }

        {
          true &&
          <Button
            handleClick={this.togglePage}
            txt={
              this.state.pageSwitch === 1 ?
                'Start' :
                this.state.pageSwitch === 0 ?
                  'Done' :
                  this.state.pageSwitch === -1 ?
                    'Done' :
                    this.state.pageSwitch === -2 ?
                      'Play' :
                      'Restart'
            }
          />
        }
      </div>
    );
  }
}
