import React from 'react'
import { Avatar, Layout } from 'antd';
import './header.scss'
const { Header } = Layout

export default class Top extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '22',
            navIndex: 0,
            items:[
                {id:0,name:'首页'},
                {id:1,name:'物业管理'},
                {id:2,name:'物业服务'},
                {id:3,name:'社区物联'},
                {id:4,name:'商圈管理'},
                {id:5,name:'数据统计'},
            ]
        }
    }
    componentDidMount() {
        this.getUser()
        console.log(this.state)
    }

    getUser = () => {
        this.setState({
            username: 'Muyy'
        })
    }
    
    navClick = (i) => {
       this.setState({
            navIndex: i
       })
    }

    render() {
        return (
            <Header className="c-header header" style={{ padding:0 }}>
                <a href="" className="c-logo">智慧社区管理平台</a>
                <div className="c-top_bar_area">
                    <ul className="c-top-nav">
                        { this.state.items.map((item,index) => (
                            <li 
                                onClick={(e)=> this.navClick(index,e)}
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