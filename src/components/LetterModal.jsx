import React, { useEffect } from 'react';
import bgImage from '../assets/bg.jpeg'; // Adjust path if needed
import '../App.css';

const LetterModal = ({ letter, onClose }) => {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, []);

  return (
    <div
      className="modal-backdrop justify-content-center align-items-center"
    style={{
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', // keep this
  backdropFilter: 'blur(4px)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)'
}}


    >
      <div className="letter-modal p-4 position-relative bg-white rounded shadow animated-modal">
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-3"
          onClick={onClose}
        ></button>
        <h2 className="modal-title text-danger mb-3">{letter.title}</h2>
        <p className="text-dark text-start" style={{ whiteSpace: 'pre-line' }}>
          {letter.content}
        </p>
        <div className="heart-effect top-left"></div>
        <div className="heart-effect bottom-right">🖤🩷</div>
      </div>
    </div>
  );
  
};


export default LetterModal;
