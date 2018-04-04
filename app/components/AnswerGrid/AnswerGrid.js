import React, { Component } from 'react';
import Answer from 'Answer';

var AnswerGrid = ( { answers } ) => {
  return (
    <div className='answerGrid'>
    {
      answers.map((answer,index)=>{
        return <Answer key ={index} answer={answer}/>
      })
    }
    </div>
  );
};

export default AnswerGrid;
