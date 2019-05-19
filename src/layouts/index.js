import React,{ Component } from 'react';
import { Layout , Menu, Icon} from 'antd';
import Link from 'umi/link';

export default class BasicLayout extends Component {
  constructor(props){
    super()
  }
  render() {
    /*可能会有路由不需要放在Layout.Content里面，例如登录页面，此时
      可以这样判断当前url，渲染不同的内容*/
      console.log("Layout")
    console.log(this.props)
   /* if(this.props.location.pathname === "/login"){
      return(
        <div>
          <button>{"登录"}</button>
        </div>
      )
    }*/
    const SubMenu = Menu.SubMenu; 
    const { Header, Footer, Sider, Content } = Layout;
    return (
        <Layout>
        <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/"><Icon type="pie-chart" /><span>{"首页"}</span></Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
              >
                 <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
                 <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
                 <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
              </SubMenu>
            </Menu>
        </Sider>
        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}