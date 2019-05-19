import React,{Component} from "react";
import {connect} from "dva";
import {Tabs,Button,Input,Radio,Table,Switch,Tooltip} from "antd";


 function Zd(props){
     console.log(props)
        return(
            <div>
                <span>{props.num}</span>
                <Tabs>
                    <Tabs.TabPane tab="自动养号" key="1">
                        <div>
                            <div>
                                <Button type="primary">{"批量养号设置"}</Button>
                                <div style={{width:660,heieght:50,marginLeft:965,marginTop:-25}}>
                                    <Radio.Group value="1">
                                        <Radio.Button value="1">{"全部"}</Radio.Button>
                                        <Radio.Button value="2">{"未执行"}</Radio.Button>
                                        <Radio.Button value="3">{"执行成功"}</Radio.Button>
                                        <Radio.Button value="4">{"执行失败"}</Radio.Button>
                                    </Radio.Group>
                                    <Input.Search style={{width:300,marginLeft:10}} placeholder="请输入微信昵称"/>
                                </div>
                            </div>

                            <div style={{marginTop:15}}>
                                <Table
                                 loading={props.loading}
                                 columns={[
                                     {
                                         "title" : "养号方式",
                                         "key" : "一",
                                         "dataIndex" : "一",
                                         "width" : 484,
                                     },
                                     {
                                         "title" : "执行微信",
                                         "key" : "二",
                                         "dataIndex" : "二",
                                         "width" : 316,
                                         "render" : ()=>{
                                             return(
                                                <Tooltip title="【(自己的)广州云贝二号】">
                                                    <span>{"【(自己的)广州云贝二号】"}</span>
                                                </Tooltip>
                                             )
                                         }
                                     },
                                     {
                                         "title" : "开始时间",
                                         "key" : "三",
                                         "dataIndex" : "三",
                                         "width" : 260,
                                     },
                                     {
                                         "title" : "类型",
                                         "key" : "四",
                                         "dataIndex" : "四",
                                         "width" : 145,
                                     },
                                     {
                                         "title" : "状态",
                                         "dataIndex" : "checked",
                                         "render" : (text,obj,index)=>{
                                             console.log(text)
                                             return (
                                                <Switch 
                                                 checkedChildren={"开启"} 
                                                 unCheckedChildren={"停止"} 
                                                 onClick={(checked)=>{
                                                    props.dispatch({type:"zdyh/onSwitchChecked",payload:{index,checked}})
                                                 }}
                                                 checked={text}
                                                 />
                                             )
                                         },
                                         "width" : 145,
                                     },
                                     {
                                        "title" : "操作",
                                        "render" : ()=>{
                                            return (
                                                <div>
                                                    <Button type="danger" disabled={true}>
                                                        <span title="已执行的记录无法编辑">{"编辑"}</span>
                                                    </Button>
                                                    <Button style={{marginLeft:10}} type="danger">{"删除"}</Button>
                                                </div>
                                            )
                                        },
                                        "width" : 300,
                                     }
                                 ]}
                                 dataSource={props.dataSource}
                                 bordered={true}
                                />
                            </div>
                        </div>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="聊天任务" key="2">
                        <div>
                            <div>
                                <Button type="primary">{"任务设置"}</Button>
                                <Button style={{marginLeft:10}}>{"查看模板"}</Button>
                            </div>

                            <div style={{marginTop:15}}>
                                <Table
                                loading={props.loading}
                                columns={[
                                    {
                                        "title" : "发起微信",
                                        "key" : "q",
                                        "dataIndex" : "q",
                                        "width" : 308,
                                    },
                                    {
                                        "title" : "接收微信",
                                        "key" : "w",
                                        "width" : 338,
                                        "render" : ()=>{
                                            return(
                                                <Tooltip title="【(自己的)广州云贝二号】">
                                                    <span>{"【(自己的)广州云贝二号】"}</span>
                                                </Tooltip>
                                            )
                                        }
                                    },
                                    {
                                        "title" : "聊天模板",
                                        "key" : "e",
                                        "dataIndex" : "e",
                                        "width" : 252,
                                    },
                                    {
                                        "title" : "任务类型",
                                        "key" : "r",
                                        "dataIndex" : "r",
                                        "width" : 155,
                                    },
                                    {
                                        "title" : "执行时间",
                                        "key" : "t",
                                        "dataIndex" : "t",
                                        "width" : 278,
                                    },
                                    {
                                        "title" : "操作",
                                        "key" : "y",
                                        "render" : ()=>{
                                            return (
                                                <div>
                                                    <Button type="primary">{"编辑"}</Button>
                                                    <Button style={{marginLeft:10}} type="danger">{"删除"}</Button>
                                                </div>
                                            )
                                        },
                                        "width" : 313,
                                    }
                                ]}
                                dataSource={[
                                    {
                                        "q" : "(云贝~丑牛)云贝～丑牛",
                                        "e" : "	电商养号话术模板",
                                        "r" : "循环",
                                        "t" : "2019-01-23 17:29:27",
                                    },
                                    {
                                        "q" : "(云贝~丑牛)云贝～丑牛",
                                        "e" : "	电商养号话术模板",
                                        "r" : "单次",
                                        "t" : "2019-03-08 14:21:00",
                                    }
                                ]}
                                bordered={true}
                                />
                            </div>
                        </div>
                    </Tabs.TabPane>
                    
                    <Tabs.TabPane tab="群聊养号" key="3">
                        <div>
                            <div>
                                <Button type="primary">{"设置任务"}</Button>
                                <Button type="primary" style={{marginLeft:10}}>{"创建群组"}</Button>
                            </div>

                            <div style={{marginTop:15}}>
                                <Table
                                loading={props.loading}
                                columns={[
                                    {
                                        "title" : "执行微信",
                                        "key" : "a",
                                        "width" : 743,
                                        "render" : ()=>{
                                            return(
                                                <Tooltip title="【(自己的)广州云贝二号】【(云贝~丑牛)云贝～丑牛】【(广州云贝陈帅)姚慧】">
                                                    <span>{"【(自己的)广州云贝二号】【(云贝~丑牛)云贝～丑牛】【(广州云贝陈帅)姚慧】"}</span>
                                                </Tooltip>
                                            )
                                        }
                                    },
                                    {
                                        "title" : "群名称",
                                        "key" : "s",
                                        "dataIndex" : "s",
                                        "width" : 160,
                                    },
                                    {
                                        "title" : "消息时间间隔（秒）",
                                        "key" : "d",
                                        "dataIndex" : "d",
                                        "width" : 230,
                                    },
                                    {
                                        "title" : "创建时间",
                                        "key" : "f",
                                        "dataIndex" : "f",
                                        "width" : 230,
                                    },
                                    {
                                        "title" : "任务状态",
                                        "key" : "g",
                                        "width" : 130,
                                        "render" : ()=>{
                                            return(
                                                <Switch checked={false} unCheckedChildren={"停止"}/>
                                            )
                                        }
                                    },
                                    {
                                        "title" : "操作",
                                        "key" : "h",
                                        "render" : ()=>{
                                            return (
                                                <div>
                                                    <Button type="danger">{"删除"}</Button>
                                                </div>
                                            )
                                        },
                                        "width" : 156,
                                    }
                                ]}
                                dataSource={[
                                    {
                                        "d" : "60",
                                        "s" : "	测试群转让1",
                                        "f" : "2019-03-15 10:27:45",
                                    }
                                ]}
                                bordered={true}
                                />
                            </div>
                        </div>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        )
    }

const mapStateToProps = (state)=>{
    return state.zdyh
}

const Zdyh = connect(mapStateToProps)(Zd)

export default Zdyh