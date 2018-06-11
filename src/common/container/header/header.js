import React from 'react'
import { Avatar, Layout } from 'antd';
import { connect } from 'react-redux'
import { asides } from '@/store/actions/aside'

import './header.scss'
const { Header } = Layout

class Top extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navIndex: 1
        }
    }
    componentDidMount() {

    }
    
    navClick = (i,link) => {
       this.setState({
            navIndex: i
       })
    //    this.props.history.push(link)
       this.props.asides(i);
    }

    render() {
        return (
            <Header className="c-header header" style={{ padding:0}}>
                <a href="" className="c-logo">智慧社区管理平台</a>
                <ul className="c-navgator">
                    <li>
                        <Avatar size="large" src={require('../../../assets/image/headImg.png')} />
                    </li>
                    <li><span className="pp">小羽</span></li>
                </ul>
            </Header>
        )
    }
}

export default connect(
    (state) => ({
        nav: state.Asides.nav,
        list: state.Asides.list
    }),
    {
        asides
    }
)(Top)