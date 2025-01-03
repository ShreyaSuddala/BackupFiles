import React, { Component } from "react";
//  function Props(p){    
//         return(
//             <h2>Hello  {p.name}  {p.age}</h2>
//        )
// }

class Props extends Component{
    constructor(props){
        // no need of specifying constructor by default a class takes constructor
    }
    render(){
        return(
            <div>
                <h2>Hello {this.props.name} and age is  {this.props.age}</h2>
            </div>
        )
    }
}
export default Props;