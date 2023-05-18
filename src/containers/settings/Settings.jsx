import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './settings.css';
const Settings = () => {
  const navigate = useNavigate();
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `/game?player1=${encodeURIComponent(player1Name)}&player2=${encodeURIComponent(player2Name)}`;
    navigate(url);
  };
  

  return (
    <div className="settings-container">
      <h1 className="settings-title">Setting players names</h1>
      <form className="settings-form" onSubmit={handleSubmit}>
        <div>
          <label className='label'>Player Nr. 1:</label>
          <input
            type="text"
            value={player1Name}
            onChange={(event) => setPlayer1Name(event.target.value)}
          />
        </div>
        <div>
          <label className='label'>Player Nr. 2:</label>
          <input
            type="text"
            value={player2Name}
            onChange={(event) => setPlayer2Name(event.target.value)}
          />
        </div>
        <button className='submitButton' type="submit">Submit</button>
        <button className="back-button" onClick={() => window.history.back()}>Back</button>
      </form>
    </div>
  );
};

export default Settings;
