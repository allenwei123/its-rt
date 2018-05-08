import { Menu, Icon, Layout } from 'antd'
import React from 'react'

const { Sider } = Layout
const SubMenu = Menu.SubMenu

export default class Aside extends React.Component {
    constructor(props) {
        super(props)
    }

    go = ()=> {
        this.props.history.push('/home/base')
    }
    go1 = ()=> {
        this.props.history.push('/home/epl')
    }
    render() {
        return (
            <Sider style={{ height:'calc(100vh - 50px',backgroundColor: '#efefef' }}>
                <Menu mode="inline">
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>回到首页</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>基础管理</span></span>}>
                        <Menu.Item key="5" onClick={()=>this.go()}>楼栋档案</Menu.Item>
                        <Menu.Item key="6" onClick={()=>this.go1()}>房间档案</Menu.Item>
                        <Menu.Item key="7">住户档案</Menu.Item>
                        <Menu.Item key="8">住户认证</Menu.Item>
                        <Menu.Item key="9">车辆认证</Menu.Item>
                        <Menu.Item key="10">车库档案</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>员工管理</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>  
        )
    }
}