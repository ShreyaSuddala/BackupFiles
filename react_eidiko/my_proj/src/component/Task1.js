import React, { Component } from 'react'

class Task1 extends Component {

    constructor(){
        super()
        this.state={
            count : 0,
            arg1:""
        }
        this.changeCount=this.changeCount.bind(this)
    }
    changeCount(arg){
         
        this.setState({         
            count : this.state.count + 1,
            arg1:arg
            
        })
        console.log(arg) 
    }
  render() {
    return (
      <div>
        <h2>count --- {this.state.count}</h2>
        <button onClick={()=>this.changeCount("hhhh")}>click</button> 
        <h2>argument value is:{this.state.arg1}</h2> 
      </div>
    )
  }
}
export default Task1;
