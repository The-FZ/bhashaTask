import React, { Component } from 'react';
import PickWords from 'PickWords';
import Statement from 'Statement';
import AnswerGrid from 'AnswerGrid';
import OptionsGrid from 'OptionsGrid';

export default class BhashaMain extends Component{

  state = {
    statement:'Winter is coming',
    options:[],
    answers:[],
    correct:false,
  }

  componentWillMount(){
    const { statement } = this.state;
    let options = statement.split(' ');

    let options2 = [];

    function randomGen(){
      let a = Math.floor(Math.random()*3);
      if(!options2.includes(options[a])){
        options2.push(options[a]);
      }

      if(options2.length!==options.length){
        randomGen();
      }
    }
    randomGen();
    this.setState({
      options:options2
    })
  }

  onClickHandler = (option) => {
    let { answers } = this.state;
    if(answers.includes(option)){
      return;
    }
    answers.push(option);
    this.setState({
      answers
    });

    this.checkAnswerWithStateMent();
  }

  checkAnswerWithStateMent = () => {
    let { answers,statement } = this.state;
    var answerStatement = answers.join(' ');
    if(statement === answerStatement){
      this.setState({
        correct:true
      });
    }
  }

  render(){
    const { options, statement,correct,answers } = this.state;
    return (
      <div className='container'>
        <PickWords/>
        <Statement statement={statement} />
        <AnswerGrid answers={this.state.answers}/>
        <OptionsGrid options={options} onClickHandler ={this.onClickHandler} correct={correct} answerLength={answers.length} />
      </div>
    );
  }
}
