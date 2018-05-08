import React from 'react'
import { Layout } from 'antd'
import Top from './header/header'
import Aside from './aside/aside'
import MyBrad from './myBread/index'
import Mycontent from './content/content'

export default class Container extends React.Component {
    render() {
        return (
            <Layout>
                <Top history={this.props.history} />
                <Layout>
                    <Aside history={this.props.history} />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <MyBrad />                                                               
                        <Mycontent />
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}