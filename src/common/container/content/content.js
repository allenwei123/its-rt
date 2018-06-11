import {  Switch, Redirect } from 'react-router-dom'
import React from 'react';
import { Layout } from 'antd'
import  routes from '@/mock/routes'
import PrivateRoute from '@/common/components/PrivateRoute'

const { Content } = Layout
export default class Rout extends React.Component {
    state = {
        rs:[]
    }
    componentDidMount() {
        this.setState({
            rs: routes
        });
    };

    render() {

        return (
            <Content style={{background: '#fff',padding:'10px'}}>
                <Switch>
                    {this.state.rs.map((route, i) => {
                        return (<PrivateRoute key={i} exact path={route.path} bread={route.bread} show={route.show} component={route.component} />)
                    })}
                    {this.state.rs.length > 0 ? (<Redirect exact from="/home" to={this.state.rs[0].path} />) : '' }
                    {this.state.rs.length > 0 ? (<Redirect to="/404" />) : '' }
                </Switch>
            </Content>
        )
    }
}
