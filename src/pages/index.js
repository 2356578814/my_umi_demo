import myStyles from './styles.css';
import {Button,Row,Col,Input,Select} from "antd";
import axios from "axios";
import {connect} from "dva"
import React,{Component} from "react";
import Link from "umi/link";
import {routerRedux} from "dva/router";
class Hello extends Component{

  fn = ()=>{
    console.log(this.refs.my.files[0])
    var file = this.refs.my.files[0]
    if(file){
      var obj = new Blob([file], { type:'text/plain' })
      var my = new FileReader()
      my.readAsDataURL(obj)
      my.onload = function(){
        console.log(this.result)
      }
    }
  }

  render(){
    console.log(this.props)
    console.log("组件")
    return (
      <div>
        <Button onClick={()=>{
          this.props.dispatch(routerRedux.push({
            pathname:"/wechat",
            query : {a:"login组件"},
            state : "数据"
          }))
        }} type="primary">{"query"}</Button>


          <Button type="primary" onClick={()=>{
          axios.get("/api/users")
        }}>{"请求"}</Button>
        
        <div style={{width:1198,height:80,border:"1px solid red"}}>
          <Row type="flex" justify="space-around">
            <Col span={8}><Input style={{width:100}}/></Col>
            <Col span={8}><Input style={{width:100}}/></Col>
            <Col span={9}><Input style={{width:100}}/></Col>
          </Row>
        </div>

        <Input.Group compact>
          <Input style={{ width: 100, textAlign: 'center' }} placeholder="Minimum" />
          <Input
            style={{
              width: 30, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff',
            }}
            placeholder="~"
            disabled
          />
          <Input style={{ width: 100, textAlign: 'center', borderLeft: 0 }} placeholder="Maximum" />
        </Input.Group>
            {/*该服务器已经不可以请求了 不是自己代码问题*/}
        <Button onClick={()=>{
          axios.post("/api/users",{"accountnum":"demo","password":"yunbei888"}).then((data)=>{
            console.log(data)
          }).catch((err)=>{
            console.log(err)
          })
        }} type="primary">{"proxy请求管理端登录接口"}</Button>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return state
}

const Obj = connect(mapStateToProps)(Hello)

export default Obj