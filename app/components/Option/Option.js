import React, { Component } from 'react';

export default class Option extends Component {
  state ={
    selected:false
  }

  onClickHandler(){
    const { option, onClickOption } = this.props;
    onClickOption(option);
    this.setState({
      selected:true
    });
  }

  render(){
    const { option, onClickOption } = this.props;
    return (
      <div className ={this.state.selected ? 'option-invisible':'option'} onClick={()=>this.onClickHandler()}>
        { option }
      </div>
    );
  }
}
