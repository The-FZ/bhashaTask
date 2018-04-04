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
    this.setState({
      options
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
        <OptionsGrid options={options} onClickHandler ={this.onClickHandler} correct={correct} answerLength={answers.length} optionsLength={options.length}/>
      </div>
    );
  }
}
