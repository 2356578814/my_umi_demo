import {connect} from "dva"
import React,{Component} from "react";


class Hello extends Component{
  render(){
    console.log(this.props)
    return (
      <div>{"model按需加载"}</div>
    );
  }
}

const mapStateToProps = (state)=>{
  return state
}

const Obj = connect(mapStateToProps)(Hello)

export default Obj