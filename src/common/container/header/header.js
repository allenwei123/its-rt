import React from 'react'
import { Avatar, Layout } from 'antd';
import menuList from '@/mock/menuList'

import './header.scss'
const { Header } = Layout

export default class Top extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navIndex: 0,
            items:[]
        }
    }
    componentDidMount() {
        let items = menuList.map(item => {
            let {name, id, src} = item;
            return { name, id ,src };
        })
        this.setState({
            items
        })
    }
    
    navClick = (i,link) => {
       this.setState({
            navIndex: i
       })
       this.props.history.push(link)
    }

    render() {
        return (
            <Header className="c-header header" style={{ padding:0 }}>
                <a href="" className="c-logo">智慧社区管理平台</a>
                <div className="c-top_bar_area">
                    <ul className="c-top-nav">
                        { this.state.items.map((item,index) => (
                            <li 
                                onClick={(e)=> this.navClick(index,item.src,e)}
                                key={index}
                                className={this.state.navIndex === index ? 'c-nav-active' :''}
                            >{item.name}</li>
                        )) }
                    </ul>
                </div>
                <ul className="c-navgator">
                    <li>
                        <Avatar size="large" src={require('../../../assets/image/headImg.png')} />
                    </li>
                    <li><span>小羽</span></li>
                </ul>
            </Header>
        )
    }
}