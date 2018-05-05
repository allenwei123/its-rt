import { Route } from 'react-router-dom';
import React from 'react';
import { Layout } from 'antd'
import Base from 'pages/baseManage'

const { Content } = Layout
export default class Rout extends React.Component {
    

    render() {
        return (
            <Content style={{background: '#fff'}}>
                <Route path="/base" component={Base} />
            </Content>
        )
    }
}
