import React,{Component} from "react";
import {connect} from "dva";
import {Select,Avatar,Tooltip,Input,DatePicker,Row,Col,Button,Table,Switch,Modal} from "antd";
import styles from "./styles.css";
import Link from "umi/link";
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
class Grouprecord extends Component{
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.dispatch({type:"weChat/loading"})
    }

    render(){
        console.log(this.props.dataSource)
        const columns = [
            {
                "title" : "设备名称",
                "key" : "one",
                "dataIndex" : "one",
                "width" : 150
            },
            {
                "title" : "操作人",
                "key" : "two",
                "dataIndex" : "two",
                "width" : 100
            },
            {
                "title" : "任务类型",
                "key" : "three",
                "dataIndex" : "three",
                "width" : 100
            },
            {
                "title" : "消息内容",
                "key" : "four",
                "width" : 600,
                "dataIndex" : "four",
                "render" : ()=>{
                    return <img src={require(`./assets/96.jpg`)}/>
                }
            },
            {
                "title" : "时间",
                "key" : "five",
                "width" : 240,
                "dataIndex" : "five",
                "render" : (val,obj,index)=>{
                    console.log(val)
                    console.log(obj)
                    console.log(index)
                    return(
                        <div>
                            <div>{`创建时间　：${val}`}</div>
                            <div>{`定时时间　：${val}`}</div>
                            <div>{`执行时间　：${val}`}</div>
                        </div>
                    )
                }
            },
            {
                "title" : "状态",
                "key" : "six",
                "width" : 120,
                "render" : ()=>{
                    return <Switch checked={true} checkedChildren={"已发送"} disabled={true}></Switch>
                }
            },
            {
                "title" : "停止/开启",
                "key" : "seven",
                "dataIndex" : "seven",
                "width" : 100
            },
            {
                "title" : "操作",
                "key" : "engit",
                "width" : 100,
                "render" : ()=>{
                    return <Button onClick={()=>{
                        this.props.dispatch({type:"weChat/onVisible"})
                    }} type="primary">{"查看详情"}</Button>
                }
            }
        ]

        return(
            <div>
                <div className={styles.box}>
                    <Row gutter={20}>
                        <Col span={8}>
                            <span style={{marginRight:12}}>{"所属微信"}</span>
                            <Select placeholder={"请选择所属微信"} style={{width:400,height:30}}>
                                <Select.Option
                                 value="one"
                                >
                                    <Tooltip title="(玩玩) 瓜子">
                                        <Avatar style={{marginRight:10,width:25,height:25}} src={require(`./assets/96.jpg`)}/>
                                        <span>{"(玩玩) 瓜子"}</span>
                                    </Tooltip>
                                </Select.Option>

                                <Select.Option
                                 value="two"
                                >
                                    <Tooltip title="(自己的)广州云贝二号">
                                        <Avatar style={{marginRight:10,width:25,height:25}} src={require(`./assets/97.png`)}/>
                                        <span>{"(自己的)广州云贝二号"}</span>
                                    </Tooltip>
                                </Select.Option>

                                <Select.Option
                                 value="three"
                                >
                                    <Tooltip title="(1)">
                                        <Avatar style={{marginRight:10,width:25,height:25}} src={require(`./assets/98.jpg`)}/>
                                        <span>{"(1)"}</span>
                                    </Tooltip>
                                </Select.Option>

                                <Select.Option
                                 value="four"
                                >
                                    <Tooltip title="(1)青萝">
                                        <Avatar style={{marginRight:10,width:25,height:25}} src={require(`./assets/99.jpg`)}/>
                                        <span>{"(1)青萝"}</span>
                                    </Tooltip>
                                </Select.Option>
                            </Select>
                        </Col>

                        <Col span={8}>
                            <span style={{marginRight:12}}>{"操作人账号"}</span>
                            <Input style={{width:400,height:30}} placeholder="请输入操作人账号"/>
                        </Col>

                        <Col span={8}>
                            <div style={{marginLeft:15}}>
                                <span style={{marginRight:12}}>{"消息类型"}</span>
                                <Select
                                 defaultValue="two" 
                                 onSelect = {(value)=>{
                                    this.props.dispatch({type:"weChat/onSelect",value})
                                 }}
                                 style={{width:410,height:30}}>
                                    <Select.Option value="one">
                                        <span>{"显示全部"}</span>
                                    </Select.Option>
                                    <Select.Option value="two">
                                        <span>{"图文"}</span>
                                    </Select.Option>
                                    <Select.Option value="three">
                                        <span>{"文本"}</span>
                                    </Select.Option>
                                </Select>
                            </div>
                        </Col>
                    </Row>

                    <Row style={{marginTop:20}}>
                        <Col span={12}>
                            <span style={{marginRight:12}}>{"创建日期"}</span>
                            <LocaleProvider locale={zh_CN}>
                                <DatePicker.RangePicker
                                style={{width:400,height:30}}
                                formate={['DD/MM/YYYY','DD/MM/YY']}
                                ranges={{ "今天": [moment(), moment()], 
                                          "本月": [moment().startOf('month'), moment().endOf('month')],
                                          "过去一周" : [moment().weekday(-1), moment()],
                                          "过去一个月" : [moment().subtract(1, 'months'),moment()],
                                          "过去半年" : [moment().subtract(6, 'months'),moment()]
                                        }}
                                onChange = {(value,mode)=>{
                                    console.log(value)
                                    console.log(mode)
                                    this.props.dispatch({type:"weChat/onTime",value,mode})
                                }}
                                value = {this.props.date}
                                />
                            </LocaleProvider>
                        </Col>

                        <Col style={{marginLeft:-165}} span={12}>
                            <Button 
                             onClick={()=>{
                                 this.props.dispatch({"type":"weChat/asyncSearch"})
                             }}
                             type="primary"
                             >{"搜索"}</Button>
                            <Button onClick={()=>{
                                this.props.dispatch({type:"weChat/asyncOnReset"})
                            }} style={{marginLeft:15}} type="primary">{"重置"}</Button>
                        </Col>
                    </Row>
                </div>

                <div style={{marginTop:20}}>
                    <Table
                     loading={this.props.lod}
                     bordered={true}
                     columns={columns}
                     dataSource={this.props.dataSource}
                    />
                </div>

                <Modal
                 title = {"详情"}
                 visible = {this.props.visible}
                 width = {800}
                 okText = {"确定"}
                 onOk = {()=>{
                    this.props.dispatch({type:"weChat/onVisible"})
                 }}
                 onCancel = {()=>{
                    this.props.dispatch({type:"weChat/onVisible"})
                 }}
                 className = {styles.modal}
                >
                    <Table 
                     bordered = {true}
                     columns = {[
                        {
                            "title" : "好友微信昵称",
                            "key" : "q",
                            "dataIndex" : "q",
                            "render" : ()=>{
                                return <Avatar src={require("./assets/96.jpg")}/>
                            },
                            width : 400
                        },
                        {
                            "title" : "微信号",
                            "key" : "w",
                            "dataIndex" : "w",
                            width : 230
                        },{
                            "title" : "所属设备",
                            "key" : "e",
                            "dataIndex" : "e",
                            width : 130,
                        }
                    ]}
                    dataSource = {[
                        {
                            "key" : "a",
                            "w" : "dsa",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "b",
                            "w" : "ddsadsaffe",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        },
                        {
                            "key" : "c",
                            "w" : "wxid",
                            "e" : "玩玩",
                        }
                    ]}
                     />
                </Modal>
                
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return state.weChat
}

const WeChatGrouprecord = connect(mapStateToProps)(Grouprecord)

export default WeChatGrouprecord