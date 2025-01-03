import React, { Component } from "react";

class State extends Component{
    constructor(){
        super()
            this.state={
                message:'Welcome visitor' ,
                count:0 
        }
        
    }
        changeMessage(){
            console.log('re-rendering subsribe')
        this.setState({
            message:'Thankyou For subsribing'
        }
            
        )     
    }
    increMent(){
        console.log('re-rendering-increment')
        this.setState({
            count : this.state.count + 1 
        })
        
    }
    decreMent(){
        console.log('re-rendering decrement')
        this.setState({
            count : this.state.count - 1 
        },
        ()=>{
            console.log('callback value', this.state.count)
     })
        console.log(this.state.count)
    }
    
    render(){
        return(
            <div>
              
                <h2>{this.state.message}</h2>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
                <h3>count - {this.state.count}</h3>
                <button onClick={()=> this.increMent()}>increase</button> 
                <button onClick={()=> this.decreMent()}>decrement</button>
            </div>
            
        )
    }
}
export default State;