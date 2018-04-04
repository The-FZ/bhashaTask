import React, { Component } from 'react';
import Option from 'Option';
import CorrectOrIncorrect from 'CorrectOrIncorrect';

var OptionsGrid = ( { options,onClickHandler, correct, answerLength, optionsLength } ) => {

  var renderOptionsOrCorrectIncorrect = () => {
    if(answerLength < optionsLength){
      return options.map((option,index) => {
        return <Option option ={option} key={index} onClickOption = {onClickHandler}/>
      })
    }
    else {
      return <CorrectOrIncorrect correct = {correct}/>
    }
  }

  return (
    <div className='optionGrid'>
        {
          renderOptionsOrCorrectIncorrect()
        }
    </div>
  );
}

export default OptionsGrid;
