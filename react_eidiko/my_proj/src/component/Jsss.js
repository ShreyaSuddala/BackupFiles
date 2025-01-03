import React, { Component } from 'react'
class Jsss extends Component {
    constructor(){
        super()
        this.state={
            message : 'hELLO'
        }
    }
    changeMessage(){
        this.setState({
            message:'Hiiiii'
        })
    }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.changeMessage()}>click</button>
      </div>
    )
  }
}
export default Jsss;
