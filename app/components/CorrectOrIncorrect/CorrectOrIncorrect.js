import React from 'react';

var CorrectOrIncorrect = ( {correct} ) => {

  return (
    <div className = {correct ? 'correct' : 'incorrect'}>
      {
        correct ? 'Correct' : 'Incorrect'
      }
    </div>
  );
}

export default CorrectOrIncorrect;
