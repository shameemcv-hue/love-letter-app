import React, { useState } from 'react';
import LetterModal from './components/LetterModal';
import { letters } from './data/letters';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [selectedLetter, setSelectedLetter] = useState(null);

  return (
    <div className="container py-5 bg-light min-vh-100 text-center">
      <h1 className="mb-4 display-5 text-danger">FOR YOU MY DEAR HASNATHEEE</h1>
      <div className="row justify-content-center">
        {letters.map((letter, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-3">
            <button
              className="btn btn-danger w-100 rounded-pill py-3"
              onClick={() => setSelectedLetter(letter)}
            >
              {letter.title}
            </button>
          </div>
        ))}
      </div>

      {selectedLetter && (
        <LetterModal letter={selectedLetter} onClose={() => setSelectedLetter(null)} />
      )}
    </div>
  );
}

export default App;
