// import React from 'react'

// const Child=(props)=> {
//  const user={

//     name:"karishma",
//     email:"karish@gmail.com"
//  }

//     const onclickevent=()=>{
// props.sendData(user)
//     }
//   return (


//     <div>
//         <button onClick={onclickevent}>send data </button>
//     </div>
//   )
// }

// export default Child
//................................................................
import React, { Component} from "react";


export default class extends Component{

  constructor(props){
    super(props);
    this.state={};
    
  }

  onChange=(e)=>{
  
    this.setState({value: e.target.value});
    
  }

  sendDataToParent=()=>{
    this.props.sendDataToParent(this.state.value)
   
  }
render(){
  return(

<div>
  
  <input value={this.state.value} onChange={this.onChange}/>
  <button onClick={this.sendDataToParent}>send data to parent</button>
 
</div>


  )
}

}


