import React from 'react';
import sadCatImage from '../../assets/sadCat.jpg';
import './modal.css';

const Modal = ({ closeModal }) => {
  const handleConfirm = () => {
    console.log('Modal confirmed');
    closeModal();
  };

  return (
    <div className="modal-container">
        <div className="modal">
            <img src={sadCatImage} alt='sadCat'/>
            <button className='closeModal' onClick={handleConfirm}>Okay...</button>
        </div>
    </div>
  );
};

export default Modal;