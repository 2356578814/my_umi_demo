import {Button,Switch,Form,Input,Checkbox,Modal,Upload,Icon} from "antd";
import React,{Component} from "react";
import {connect} from "dva";
class Demo extends Component{
    constructor(){
        super()
    }

    render(){
        let arr = [1]
        return (
            arr ? <div>true</div> : 
            <span>false</span>
        )
    }
}


class B extends Component{

    state = {
        visible :false,
        img : ""
    }

    a = () => {
        var obj = this.refs.input
        obj.focus()
        obj.selectionStart = 6
        obj.selectionEnd = obj.value.length+1
    }

    render(){
        console.log(this.props.onChange)
        return (
            <div>
                <input style={{width:500}} type="text" ref="input" value="那段话短吻合度按规定撒个打打我发染发"/>
                <Button onClick={this.a} type="primary" title="123">点击</Button>
            </div>
        )
    }
}



const mapStateToProps = (state)=>{
    return state
}
const FriendsTags = connect(mapStateToProps)(B)

export default FriendsTags