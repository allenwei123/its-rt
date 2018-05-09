import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react';
import { Layout } from 'antd'
import routes from '@/mock/routes'

const { Content } = Layout
export default class Rout extends React.Component {
    state = {
        rs:[]
    }
    componentDidMount() {
        setTimeout(()=> {
            const mockJson = {aaa:true ,bbb:true};
            let bs = routes.filter(item => mockJson[item.show]);
            this.setState({
                rs: bs
            })
        },1000)
    }

    render() {

        return (
            <Content style={{background: '#fff',padding:'10px'}}>
                <Switch>
                    {this.state.rs.map((route, i) => {
                        return (<Route key={i} exact path={route.path} component={route.component} />)
                    })}
                    {this.state.rs.length > 0 ? (<Redirect exact from="/home" to={this.state.rs[0].path} />) : '' } 
                    {this.state.rs.length > 0 ? (<Redirect to="/404" />) : '' } 
                </Switch>
            </Content>
        )
    }
}
