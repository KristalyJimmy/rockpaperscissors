import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import './home.css';
import Modal from '../../components/modal/Modal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleYesButtonClick = () => {
    // Redirect to the Settings page
    navigate('/settings');
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='homePage'> 
      <h1>Do you want to play a game?</h1>
      <div className='button-container'>
        <button className='buttonYes' type='button' onClick={handleYesButtonClick}>YES</button>
        <button className='buttonNo' type='button' onClick={openModal}>NO</button>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Home;