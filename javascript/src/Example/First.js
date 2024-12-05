import { Component } from "react";
import Second from "./Second";
// import PropTypes from "prop-types";
 class First extends Component{
    render(){
        const x ="sadhana";
        return(
            <>
            
            <h2>name:{this.props.name} tutorial</h2>
            <h2>age:{this.props.age}</h2>
            <h2>Student:{this.props.isStudent?"yes":"no"}</h2>
           <Second names={x}/>
            
            </>
        )
    }
    
}



export default First
// First.defaultprops={
//     name:"guest",
//     age:0,
//     isStudent:false,
// }