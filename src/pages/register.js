import {Form,Input,Button,Icon} from "antd";
import React,{Component} from "react";
import {connect} from "dva";
import styles from "./styles.css";
class RegisterDemo extends Component{
    constructor(){
        super()
        this.fn=this.fn.bind(this)
    }

    fn(userName,passWord){
        this.props.dispatch({type:"register/register",payload:{userName,passWord}})
    }

    render(){
        return(
            <div>
                <MyRegister fn={this.fn}/>
            </div>
        )
    }
}


class OnRegister extends Component{
    constructor(){
        super()
    }
    render(){
        const {getFieldDecorator} = this.props.form 
        //获取用户输入的账号
        var userName = this.props.form.getFieldsValue(["userName"])
        //获取用户输入的密码
        var passWord = this.props.form.getFieldsValue(["passWord"])
        return(
            <div className={styles.userNameAndPassword}>
                <div className={styles.a+" "+styles.b}>{"测试"}</div>
                <Form>
                    <Form.Item>
                        {
                          getFieldDecorator('userName',{rules:[{required:true,whitespace:true,message:"请输入账号"}]})(
                                <Input prefix={<Icon type="user" style={{ color:"rgba(0,0,0,.25)"}}/>} placeholder="账号"/>
                            )
                        }
                    </Form.Item>
                    <Form.Item> 
                        {
                          getFieldDecorator('passWord',{rules: [{required:true,whitespace:true,message:"请输入密码"},{
                          }]})(
                                <Input prefix={<Icon type="lock" style={{ color:"rgba(0,0,0,.25)"}}/>} type="password" placeholder="密码"/>
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={()=>{
                                this.props.fn(userName,passWord)
                            }} style={{height:50,backgroundColor:"#233A5A",border:"none",fontSize:18}} block={true} type="primary">{"注册"}</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        state : state.register
    }
}

const MyRegister = Form.create({name:"11"})(OnRegister)

const Register = connect(mapStateToProps)(RegisterDemo)

export default Register