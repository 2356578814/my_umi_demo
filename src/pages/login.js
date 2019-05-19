import {Button} from "antd";
import Link from "umi/link";
import React,{Component} from "react";
import {connect} from "dva";
import {Redirect} from "react-router";
console.log(Redirect)
class Login extends Component{
    constructor(){
        super()
        this.state = {
            num : 0
        }
    }

    tt = ()=>{
        this.setState((state,props)=>{
            console.log(state)
            console.log(props)
            return{num:state.num+1}
        })
    }

    render(){
        return (
            <div>
                <Button type="danger">
                    <Link to="/">{"去根路由"}</Link>
                </Button>
                <Button onClick={this.tt} type="primary">{"函数式setState"}</Button>
                <A a={1} b={2}/>
                <span>{this.state.num}</span>
            </div>
        )
    }
}

function A({a,b}){
    return(
        <div>
            <span>{a}</span>
            <span>{b}</span>
        </div>
    )
}

export default Login
