import React,{Component} from "react";
import {Model} from "antd";

export default class Demo extends Component{
    constructor(){
        super()
        console.log("constructor")
        this.state={a:1}
        this.a=this.a.bind(this)
    }
    componentDidMount(){
        console.log("componentDidMount")
      
    }
    a(){
        console.log("a")
        this.setState({a:2})
    }
    componentWillMount(){
        console.log("componentWillMount")
    }
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    componentWillUnmount(){
        alert(1)
        console.log("componentWillUnmount")
        //卸载
    }

    componentWillUpdate(a,b){
        console.log(a)
        console.log(b)
        console.log("componentWillUpdate")
    }
   
 
    render(){
        console.log("render1")
        console.log("执行了几遍")
        return(
            <div>
                <h1>{"这是Umi.js的默认首页404"}</h1>
                <button onClick={this.a}>{this.state.a}</button>
            </div>
        )
    }
}