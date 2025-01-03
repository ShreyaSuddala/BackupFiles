import React, { Component } from 'react'

class Class extends Component {
    constructor(){
        super()
        this.state={
            id : 1099
        }
}
  render() {
    return (
      <div>
        <h1>{this.state.id}</h1>
      </div>
    )
  }
}
export default Class;
