import React, { useState } from 'react';
import CityQuiz from 'components/CityQuiz/CityQuiz';
import MathGame from 'components/MathGame/MathGame';
import './App.css';

class App extends React.Component {
  state = {
    selectedGame: null,
  };

  handleGameSelect = (game) => {
    this.setState({ selectedGame: game });
  };

  handleBackToMenu = () => {
    this.setState({ selectedGame: null });
  };

  render() {
    const { selectedGame } = this.state;

    return (
      <div className="world-screen">
        {selectedGame !== null && (
          <button className="back-button" onClick={this.handleBackToMenu}>
            Exit
          </button>
        )}

        {selectedGame === null && (
          <div className="game-selector">
            <button className="game-button city-mode" onClick={() => this.handleGameSelect('city')}>
              Explore Cities
            </button>
            <button className="game-button math-mode" onClick={() => this.handleGameSelect('math')}>
              Solve Math
            </button>
          </div>
        )}

        {selectedGame === 'city' && <CityQuiz />}
        {selectedGame === 'math' && <MathGame />}
      </div>
    );
  }
}

export default App;