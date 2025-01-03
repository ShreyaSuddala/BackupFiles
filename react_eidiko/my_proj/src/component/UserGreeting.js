import React,{Component} from "react";

class UserGreeting extends Component {
    constructor(props){
        super(props)

        this.state={
            isLoggedin:true
        }
    }
    // render(){
    //     let message
    //     if(this.state.isLoggedin){
    //         message= <div>Welcome to React</div>
    //     }
    //     else{
    //         message= <div>Welcome to JavaScript</div>
    //     }
    //     return <div>{message}</div>                     -----------Element Variables------------
    // }


    render(){
        if(this.state.isLoggedin){
            return <div>Welcome React</div>
        }
        else{
            return <div>Welcome JavaScript</div>        
        }
    }

//        render(){
//         return(
//             this.state.isLoggedin ?
//             (
//             <div>Welcome React</div>
//             ) :
//             (
//             <div>Welcome JavaScript</div>   --------Ternary operator----------------
//             )
//         )
//        }
}
export default UserGreeting;