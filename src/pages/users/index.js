import { Table,Button} from 'antd';
import { connect } from 'dva';
import React,{Component} from "react";
import {routerRedux} from "dva/router";
console.log(routerRedux)
//这个页面进入user就行 路由默认是index文件
  class List extends React.Component {
    constructor(){
    super()
    this.state={a:77777}
    }
    columns = [
      {
        title: '名称',
        dataIndex: 'name',
        rowKey : "cyt_1"
      },
      {
        title: '描述',
        dataIndex: 'desc',
        rowKey : "cyt_2"
      },
      {
        title: '链接',
        dataIndex: 'url',
        rowKey : "cyt_3",
        render: value => <a href={value}>{value}</a>,
      },
    ];

    componentDidMount() {
        this.props.dispatch({
          type: 'cards/queryList',
        });
      }

       a = ()=>{
        console.log(this.state.a)
      }

       b(){
        console.log(this.state.a)
      }

    render() {
        console.log(this.props)
        const { cardsList, cardsLoading } = this.props;

        return (
          <div>
            <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />
            <Button type="primary" onClick={()=>{
              this.props.dispatch(routerRedux.push({
                pathname:"/home"
              }))
            }}>{"测试函数"}</Button>
            <span>index</span>
          </div>
        );
      }
  }

  function mapStateToProps(state) {
    console.log(state)
    return {
      cardsList: state.cards.cardsList,
      cardsLoading: state.loading.effects['cards/queryList'],
    };
  }

  const data = connect(mapStateToProps)(List);
  export default data

