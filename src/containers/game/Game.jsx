import React, { useState, useEffect } from 'react';
import './game.css';
import rock from '../../assets/rock.jpg';
import paper from '../../assets/paper.jpg';
import scissor from '../../assets/scissor.jpg';

const Game = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const player1Name = urlParams.get("player1");
  const player2Name = urlParams.get("player2");

  const [playerOnePoints, setPlayerOnePoints] = useState(0);
  const [playerTwoPoints, setPlayerTwoPoints] = useState(0);
  const [playerOneState, setPlayerOneState] = useState('Draft');
  const [playerTwoState, setPlayerTwoState] = useState('Draft');
  const [randomNumOne, setRandomNumOne] = useState(0);
  const [randomNumTwo, setRandomNumTwo] = useState(0);

  const myPix1 = [rock, paper, scissor];
  const myPix2 = [rock, paper, scissor];

  useEffect(() => {
    // Update player states
    if (playerOnePoints > playerTwoPoints) {
      setPlayerOneState('Winner');
      setPlayerTwoState('Loser');
    } else if (playerOnePoints < playerTwoPoints) {
      setPlayerOneState('Loser');
      setPlayerTwoState('Winner');
    } else {
      setPlayerOneState('Draft');
      setPlayerTwoState('Draft');
    }
  }, [playerOnePoints, playerTwoPoints]);

  const playGame = () => {
    const newRandomNumOne = Math.floor(Math.random() * myPix1.length);
    const newRandomNumTwo = Math.floor(Math.random() * myPix2.length);

    setRandomNumOne(newRandomNumOne);
    setRandomNumTwo(newRandomNumTwo);

    const playerOneImg = myPix1[newRandomNumOne];
    const playerTwoImg = myPix2[newRandomNumTwo];

    if (
      (playerOneImg === rock && playerTwoImg === paper) ||
      (playerOneImg === paper && playerTwoImg === scissor) ||
      (playerOneImg === scissor && playerTwoImg === rock)
    ) {
      setPlayerTwoPoints(prevPoints => prevPoints + 1);
    }

    if (
      (playerTwoImg === rock && playerOneImg === paper) ||
      (playerTwoImg === paper && playerOneImg === scissor) ||
      (playerTwoImg === scissor && playerOneImg === rock)
    ) {
      setPlayerOnePoints(prevPoints => prevPoints + 1);
    }
  };

  return (
    <div className="game-container">
      <button className="game-back-button" onClick={() => window.history.back()}>Back</button>
      <div className="game-stats">
        <div className="game-card">
          <div className="game-card-header">
            <p className="playerName" id="player1Name">{player1Name}</p>
          </div>
          <ul className="list-group">
            <li className="list-group-item">Points</li>
            <li className="list-group-item" id="player1Points">{playerOnePoints}</li>
            <li className={`list-group-item ${playerOneState === 'Winner' ? 'winner' : playerOneState === 'Loser' ? 'loser' : 'draft'}`} id="player1State">{playerOneState}</li>
          </ul>
        </div>
        <div className="game-card">
          <div className="game-card-header">
            <p className="playerName" id="player2Name">{player2Name}</p>
          </div>
          <ul className="list-group">
            <li className="list-group-item">Points</li>
            <li className="list-group-item" id="player2Points">{playerTwoPoints}</li>
            <li className={`list-group-item ${playerTwoState === 'Winner' ? 'winner' : playerTwoState === 'Loser' ? 'loser' : 'draft'}`} id="player2State">{playerTwoState}</li>
          </ul>
        </div>
      </div>
      <div className="game-images">
        <div className="game-images-image">
          <img src={myPix1[randomNumOne]} alt="rock-paper-scissor" />
        </div>
        <div className="game-images-image">
          <img src={myPix2[randomNumTwo]} alt="rock-paper-scissor" />
        </div>
      </div>
      <button type="button" className="play-button" onClick={playGame}>
        Rock, Paper, Scissors!
      </button>
    </div>
  );
};

export default Game;
