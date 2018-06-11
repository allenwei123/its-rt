import { Menu, Icon, Layout } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import { asides } from '@/store/actions/aside'

const { Sider } = Layout
const SubMenu = Menu.SubMenu

class Aside extends React.Component {
   state = {
       currentPath: this.props.history.location.pathname
   }
    componentDidMount() {
    }
    navClick = (path)=> {
        this.props.history.push(path);
    };
    render() {
        return (
            <Sider style={{ height:'calc(100vh - 50px',backgroundColor: '#fff' }}>
                <Menu
                    defaultSelectedKeys={[this.state.currentPath]}
                    mode="inline">
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>回到首页</span>
                    </Menu.Item>
                    {
                        this.props.list.map(item =>(
                            <SubMenu key={item.name} title={<span><Icon type="appstore" /><span>{item.name}</span></span>}>
                                {item.children.map(gg => (
                                    <Menu.Item key={gg.path} onClick={()=>this.navClick(gg.path)} > {gg.name }</Menu.Item>
                                ))}
                            </SubMenu>
                        ))
                    }
                </Menu>
            </Sider>  
        )
    }
}

export default connect(
    (state) => ({
        list: state.Asides.list
    }),
    {
        asides
    }
)(Aside)